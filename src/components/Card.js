import imageDelete from '../images/Delete.svg';
import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import api from "../utils/Api";

class Card extends React.Component {
    static contextType = CurrentUserContext;

    constructor(props) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick() {
        this.props.onCardClick(this.props.card);
    }

    render() {
        // Определяем, являемся ли мы владельцем текущей карточки
        const isOwn = this.props.card.owner._id === this.context._id;

        // Создаём переменную, которую после зададим в `className` для кнопки удаления
        const cardDeleteButtonClassName = (
            `${isOwn ? 'element__delete' : 'element__delete_hidden'}`
        );

        return (
            <article className="element">
                <img onClick={this.handleCardClick} className="element__img" src={this.props.card.link}/>
                <h2 className="element__title">{this.props.card.name}</h2>
                <div className="element__like">
                    <button type="button" className="element__button-like" aria-label></button>
                    <span className="element__counter-like">{this.props.card.likes.length}</span>
                </div>
                <button type="button" className={cardDeleteButtonClassName} aria-label>
                    <img src={imageDelete} alt="Корзина удалить"
                         className="element__delete-img"/>
                </button>
            </article>
        );
    }
}

export default Card;