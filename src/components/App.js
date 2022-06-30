import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';
import dataApi from "../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import avatar from "../images/Avatar.jpg";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            isImagePopupOpen: false,
            selectedCard: null,
            currentUser: {
                name: "Жак-Ив Кусто",
                about: "Исследователь океана",
                avatar: avatar,
            },
        }
        this.closeAllPopups = this.closeAllPopups.bind(this);
        this.openPopupAvatar = this.openPopupAvatar.bind(this);
        this.openPopupEditProfile = this.openPopupEditProfile.bind(this);
        this.openPopupAddPost = this.openPopupAddPost.bind(this);
        this.openPopupPreview = this.openPopupPreview.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleUpdateAvatar = this.handleUpdateAvatar.bind(this);
        this.handleAddCard = this.handleAddCard.bind(this);
        this.handleCardLike = this.handleCardLike.bind(this);
        this.handleCardDelete = this.handleCardDelete.bind(this);
    }

    componentDidMount() {
        dataApi.fetchUserInfo()
            .then(result => {
                    this.setState({
                        currentUser: result,
                    });
                }
            )
            .catch(err => {
                console.log(err);
            });
        dataApi.fetchCards()
            .then((cards) => {
                this.setCards(cards);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }

    setCards(cards) {
        this.setState({
            cards: cards,
        });
    }

    handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === this.state.currentUser._id);
        if (isLiked) {
            dataApi.unlikeCard(card._id)
                .then((newCard) => {
                    this.setCards(this.state.cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                });
        } else {
            dataApi.likeCard(card._id)
                .then((newCard) => {
                    this.setCards(this.state.cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                });
        }
    }

    handleCardDelete(card) {
        dataApi.deleteCard(card._id)
            .then(() => {
                this.setCards(this.state.cards.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }

    handleUpdateUser(data) {
        dataApi.updateUserInfo(data)
            .then(result => {
                    this.setState({
                        currentUser: result,
                    });
                    this.closeAllPopups();
                }
            )
            .catch(err => {
                console.log(err);
            });
    }

    handleAddCard(data) {
        dataApi.createCard(data)
            .then((card) => {
                    this.setCards([card, ...this.state.cards]);
                    this.closeAllPopups();

                }
            )
            .catch(err => {
                console.log(err);
            });
    }

    handleUpdateAvatar(data) {
        dataApi.updateUserAvatar(data.avatar)
            .then(result => {
                    this.setState({
                        currentUser: result,
                    });
                    this.closeAllPopups();
                }
            )
            .catch(err => {
                console.log(err);
            });
    }

    closeAllPopups() {
        this.setState(
            {
                isEditProfilePopupOpen: false,
                isAddPlacePopupOpen: false,
                isEditAvatarPopupOpen: false,
                isImagePopupOpen: false,
                selectedCard: null,
            }
        );
    }

    openPopupAvatar() {
        this.setState(
            {
                isEditAvatarPopupOpen: true,
            }
        );
    }

    openPopupEditProfile() {
        this.setState(
            {
                isEditProfilePopupOpen: true,
            }
        );
    }

    openPopupAddPost() {
        this.setState(
            {
                isAddPlacePopupOpen: true,
            }
        );
    }

    openPopupPreview(card) {
        this.setState(
            {
                isImagePopupOpen: true,
                selectedCard: card,
            }
        );
    }

    render() {
        const name = this.state.selectedCard == null ? "" : this.state.selectedCard.name;
        const link = this.state.selectedCard == null ? "" : this.state.selectedCard.link;

        return (
            <CurrentUserContext.Provider value={this.state.currentUser}>

                <div className="App">

                    <div className="page">
                        <Header/>
                        <Main
                            onCardClick={this.openPopupPreview}
                            openPopupEditProfile={this.openPopupEditProfile}
                            openPopupAddPost={this.openPopupAddPost}
                            openPopupAvatar={this.openPopupAvatar}
                            onLike={this.handleCardLike}
                            onCardDelete={this.handleCardDelete}
                            cards={this.state.cards}


                        />
                        <Footer/>

                        <EditProfilePopup
                            isOpened={this.state.isEditProfilePopupOpen}
                            user={this.state.currentUser}
                            onClose={this.closeAllPopups}
                            onUpdateUser={this.handleUpdateUser}/>

                        <AddPlacePopup
                            isOpened={this.state.isAddPlacePopupOpen}
                            onClose={this.closeAllPopups}
                            onAddCard={this.handleAddCard}/>


                        <EditAvatarPopup
                            isOpened={this.state.isEditAvatarPopupOpen}
                            onClose={this.closeAllPopups}
                            onUpdateAvatar={this.handleUpdateAvatar}
                        />
                        <PopupWithForm
                            onClose={this.closeAllPopups}
                            title="Вы уверены?"
                            name="popup-delete"/>

                        <ImagePopup
                            onClose={this.closeAllPopups}
                            isOpened={this.state.isImagePopupOpen}
                            title={name}
                            image={link}/>
                    </div>
                </div>
            </CurrentUserContext.Provider>
        );
    }
}

export default App;
