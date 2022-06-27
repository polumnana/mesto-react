import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';
import api from "../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import avatar from "../images/Avatar.jpg";
import EditProfilePopup from "./EditProfilePopup";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    }

    componentDidMount() {
        api.fetchUserInfo()
            .then(result => {
                    this.setState({
                        currentUser: result,
                    });
                }
            )
            .catch(err => {
                console.log(err);
            });
    }

    handleUpdateUser(data) {
        api.updateUserInfo(data)
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
                        <Main onCardClick={this.openPopupPreview} openPopupEditProfile={this.openPopupEditProfile}
                              openPopupAddPost={this.openPopupAddPost} openPopupAvatar={this.openPopupAvatar}/>
                        <Footer/>

                        <EditProfilePopup isOpened={this.state.isEditProfilePopupOpen}
                                          user={this.state.currentUser}
                                          onClose={this.closeAllPopups}
                                          onUpdateUser={this.handleUpdateUser}/>

                        <PopupWithForm onClose={this.closeAllPopups} title="Новое место" name="add-photo"
                                       isOpened={this.state.isAddPlacePopupOpen}>
                            <input id="photo-input" type="text" className="popup__input popup__input_form-title"
                                   placeholder="Описание фото" name="name" required minLength="2" maxLength="30"
                                   value=""/>
                            <span className="popup__type-input-error photo-input-error"></span>
                            <input id="link-input" type="url" className="popup__input popup__input_form-link"
                                   placeholder="Ссылка на фото" name="link" required value=""/>
                            <span className="popup__type-input-error link-input-error"></span>
                        </PopupWithForm>

                        <PopupWithForm onClose={this.closeAllPopups} title="Обновить аватар" name="update-avatar"
                                       isOpened={this.state.isEditAvatarPopupOpen}>
                            <input id="avatar-link-input" type="url" className="popup__input popup__input_form-link"
                                   placeholder="Ссылка на фото" name="link" required value=""/>
                            <span className="popup__type-input-error avatar-link-input-error"></span>
                        </PopupWithForm>

                        <PopupWithForm onClose={this.closeAllPopups} title="Вы уверены?" name="popup-delete"/>

                        <ImagePopup onClose={this.closeAllPopups} isOpened={this.state.isImagePopupOpen}
                                    title={name} image={link}/>
                    </div>
                </div>
            </CurrentUserContext.Provider>
        );
    }
}

export default App;
