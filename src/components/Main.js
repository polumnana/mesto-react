import buttonEdit from '../images/Edit_Button.svg';
import buttonAddPost from '../images/Add_post.svg';
import avatar from '../images/Avatar.jpg';
import api from "../utils/Api.js";
import Card from "./Card.js";
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Жак-Ив Кусто",
            userDescription: "Исследователь океана",
            userAvatar: avatar,
            cards: [],
        }
    }

    // Метод будет вызван сразу после монтирования: создаём эффекты
    componentDidMount() {
        Promise
            .all([api.fetchUserInfo(), api.fetchCards()])
            .then(([userData, cards]) => {
                this.setState({
                    userName: userData.name,
                    userDescription: userData.about,
                    userAvatar: userData.avatar,
                    cards: cards,
                });
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
                        <img src={this.state.userAvatar} alt="Аватар пользователя" className="profile__avatar" />
                        <div className="profile__overlay">
                            <img src={buttonEdit} alt="Кнопка карандашик" className="profile__edit-avatar" />
                        </div>
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__info-name">{this.state.userName}</h1>
                        <button type="button" className="profile__button-edit" aria-label
                            onClick={this.props.openPopupEditProfile}>
                            <img src={buttonEdit} alt="Кнопка карандашик" />
                        </button>
                    </div>
                    <p className="profile__info-about">{this.state.userDescription}</p>
                    <button type="button" className="profile__button-add" aria-label
                        onClick={this.props.openPopupAddPost}>
                        <img src={buttonAddPost} alt="Кнопка плюсик" />
                    </button>
                </section>

                <section className="elements">
                    {this.state.cards.map((card) => (
                        <Card onCardClick={this.props.onCardClick} card={card} key={card._id} />
                    ))}
                </section>
            </main>
        );
    }
}

export default Main;