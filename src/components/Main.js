import buttonEdit from '../images/Edit_Button.svg';
import buttonAddPost from '../images/Add_post.svg';
import avatar from '../images/Avatar.jpg';
import imageDelete from '../images/Delete.svg';

import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <main className="content">
                <section className="profile">
                    <button type="button" className="profile__button-avatar" aria-label
                        onClick={this.props.openPopupAvatar}>
                        <img src={avatar} alt="Аватар пользователя" className="profile__avatar" />
                        <div className="profile__overlay">
                            <img src={buttonEdit} alt="Кнопка карандашик" className="profile__edit-avatar" />
                        </div>
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__button-edit" aria-label
                            onClick={this.props.openPopupEditProfile}>
                            <img src={buttonEdit} alt="Кнопка карандашик" />
                        </button>
                    </div>
                    <p className="profile__info-about">Исследователь океана</p>
                    <button type="button" className="profile__button-add" aria-label
                        onClick={this.props.openPopupAddPost}>
                        <img src={buttonAddPost} alt="Кнопка плюсик" />
                    </button>
                </section>

                <section className="elements">
                </section>


                <template className="element-template">
                    <article className="element">
                        <img className="element__img" />
                        <h2 className="element__title"></h2>
                        <div className="element__like">
                            <button type="button" className="element__button-like" aria-label></button>
                            <span className="element__counter-like"></span>
                        </div>
                        <button type="button" className="element__delete" aria-label>
                            <img src={imageDelete} alt="Корзина удалить"
                                className="element__delete-img" />
                        </button>
                    </article>

                </template>

            </main>

        );
    }
}

export default Main;