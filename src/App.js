import headerLogo from './images/Logo.svg';
import buttonEdit from './images/Edit_Button.svg';
import buttonAddPost from './images/Add_post.svg';
import avatar from './images/Avatar.jpg';

// import './App.css';
//коммит-проверка

function App() {
    return (
        <div className="App">

            <div class="page">
                <header className="header">
                    <img src={headerLogo} alt="Логотип Место" className="header__logo" />
                </header>


                <main class="content">
                    <section className="profile">
                        <button type="button" className="profile__button-avatar" aria-label>
                            <img src={avatar} alt="Аватар пользователя" className="profile__avatar" />
                            <div className="profile__overlay">
                                <img src={buttonEdit} alt="Кнопка карандашик" className="profile__edit-avatar" />
                            </div>
                        </button>
                        <div className="profile__info">
                            <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                            <button type="button" className="profile__button-edit" aria-label>
                                <img src={buttonEdit} alt="Кнопка карандашик" className />
                            </button>
                        </div>
                        <p className="profile__info-about">Исследователь океана</p>
                        <button type="button" className="profile__button-add" aria-label>
                            <img src={buttonAddPost} alt="Кнопка плюсик" className />
                        </button>
                    </section>

                    <section className="elements">
                    </section>


                    <template class="element-template">
                        <article class="element">
                            <img class="element__img" />
                            <h2 class="element__title"></h2>
                            <div class="element__like">
                                <button type="button" class="element__button-like" aria-label></button>
                                <span class="element__counter-like"></span>
                            </div>
                            <button type="button" class="element__delete" aria-label>
                                <img src="<%=require('./images/Delete.svg')%>" alt="Корзина удалить"
                                    class="element__delete-img" />
                            </button>
                        </article>

                    </template>

                </main>

                <footer className="footer">
                    <p className="footer__copyright">© 2022 Mesto Russia</p>
                </footer>


                <div>
                    <section className="popup popup_profile">
                        <div className="popup__container">
                            <h2 className="popup__title">Редактировать профиль</h2>
                            <form className="popup__form popup__form_edit-profile" name="formEditProfile" noValidate>
                                <input id="name-input" type="text" className="popup__input popup__input_form-name" placeholder="Ваше имя" name="username" required minLength={2} maxLength={40} defaultValue />
                                <span className="popup__type-input-error name-input-error" />
                                <input id="about-input" type="text" className="popup__input popup__input_form-about" placeholder="Расскажите о себе..." name="about" required minLength={2} maxLength={200} defaultValue />
                                <span className="popup__type-input-error about-input-error" />
                                <button type="submit" className="popup__form-submit popup__form-submit_edit-profile popup__form-submit_disabled">Сохранить</button>
                            </form>
                            <button type="reset" className="popup__close-form popup__close-form_edit-profile" aria-label>
                                <img src="<%=require('./images/Close_edit_Icon.svg')%>" alt="Кнопка закрыть крестик" className="popup__close-form-img" />
                            </button>
                        </div>
                    </section>
                    <section className="popup popup_gallery">
                        <div className="popup__container">
                            <h2 className="popup__title">Новое место</h2>
                            <form className="popup__form popup__form_add-photo" name="formAddPhoto" noValidate>
                                <input id="photo-input" type="text" className="popup__input popup__input_form-title" placeholder="Описание фото" name="name" required minLength={2} maxLength={30} defaultValue />
                                <span className="popup__type-input-error photo-input-error" />
                                <input id="link-input" type="url" className="popup__input popup__input_form-link" placeholder="Ссылка на фото" name="link" required defaultValue />
                                <span className="popup__type-input-error link-input-error" />
                                <button type="submit" className="popup__form-submit popup__form-submit_add-photo popup__form-submit_disabled">Сохранить</button>
                            </form>
                            <button type="reset" className="popup__close-form popup__close-form_add-photo" aria-label>
                                <img src="<%=require('./images/Close_edit_Icon.svg')%>" alt="Кнопка закрыть крестик" className="popup__close-form-img" />
                            </button>
                        </div>
                    </section>
                    <section className="popup popup_preview">
                        <div className="popup__preview">
                            <img className="popup__img" />
                            <p className="popup__text" />
                            <button type="reset" className="popup__close-form popup__close-form_preview" aria-label>
                                <img src="<%=require('./images/Close_edit_Icon.svg')%>" alt="Кнопка закрыть крестик" className="popup__close-form-img" />
                            </button>
                        </div>
                    </section>
                    <section className="popup popup_delete">
                        <div className="popup__container">
                            <h2 className="popup__title">Вы уверены?</h2>
                            <form className="popup__form popup__form_popup-delete" name="formDelete" noValidate>
                                <button type="submit" className="popup__form-submit popup__form-submit_popup-delete">Да</button>
                            </form>
                            <button type="reset" className="popup__close-form popup__close-form_popup-delete" aria-label>
                                <img src="<%=require('./images/Close_edit_Icon.svg')%>" alt="Кнопка закрыть крестик" className="popup__close-form-img" />
                            </button>
                        </div>
                    </section>
                    <section className="popup popup_update-avatar">
                        <div className="popup__container">
                            <h2 className="popup__title">Обновить аватар</h2>
                            <form className="popup__form popup__form_update-avatar" name="formUpdateAvatar" noValidate>
                                <input id="avatar-link-input" type="url" className="popup__input popup__input_form-link" placeholder="Ссылка на фото" name="link" required defaultValue />
                                <span className="popup__type-input-error avatar-link-input-error" />
                                <button type="submit" className="popup__form-submit popup__form-submit_update-avatar popup__form-submit_disabled">Сохранить</button>
                            </form>
                            <button type="reset" className="popup__close-form popup__close-form_update-avatar" aria-label>
                                <img src="<%=require('./images/Close_edit_Icon.svg')%>" alt="Кнопка закрыть крестик" className="popup__close-form-img" />
                            </button>
                        </div>
                    </section>
                </div>



            </div>

        </div>

    );
}

export default App;
