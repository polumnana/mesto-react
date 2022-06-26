import buttonEdit from '../images/Edit_Button.svg';
import buttonAddPost from '../images/Add_post.svg';
import api from "../utils/Api.js";
import Card from "./Card.js";
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

class Main extends React.Component {
    static contextType = CurrentUserContext;

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    // Метод будет вызван сразу после монтирования: создаём эффекты
    componentDidMount() {
        api.fetchCards()
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
        const isLiked = card.likes.some(i => i._id === this.context._id);
        if (isLiked) {
            api.unlikeCard(card._id)
                .then((newCard) => {
                    this.setCards(this.state.cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                });
        } else {
            api.likeCard(card._id)
                .then((newCard) => {
                    this.setCards(this.state.cards.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                });
        }
    }

    handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                this.setCards(this.state.cards.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }

    render() {
        return (
            <main className="content">
                <section className="profile">
                    <button type="button" className="profile__button-avatar" aria-label
                            onClick={this.props.openPopupAvatar}>
                        <img src={this.context.avatar} alt="Аватар пользователя" className="profile__avatar"/>
                        <div className="profile__overlay">
                            <img src={buttonEdit} alt="Кнопка карандашик" className="profile__edit-avatar"/>
                        </div>
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__info-name">{this.context.name}</h1>
                        <button type="button" className="profile__button-edit" aria-label
                                onClick={this.props.openPopupEditProfile}>
                            <img src={buttonEdit} alt="Кнопка карандашик"/>
                        </button>
                    </div>
                    <p className="profile__info-about">{this.context.about}</p>
                    <button type="button" className="profile__button-add" aria-label
                            onClick={this.props.openPopupAddPost}>
                        <img src={buttonAddPost} alt="Кнопка плюсик"/>
                    </button>
                </section>

                <section className="elements">
                    {this.state.cards.map((card) => (
                        <Card onCardDelete={this.handleCardDelete.bind(this)}
                              onLike={this.handleCardLike.bind(this)}
                              onCardClick={this.props.onCardClick}
                              card={card}
                              key={card._id}/>
                    ))}
                </section>
            </main>
        );
    }


}

export default Main;