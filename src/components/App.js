import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            isImagePopupOpen: true,
        }
        this.closeAllPopups = this.closeAllPopups.bind(this);
        this.openPopupAvatar = this.openPopupAvatar.bind(this);
        this.openPopupEditProfile = this.openPopupEditProfile.bind(this);
        this.openPopupAddPost = this.openPopupAddPost.bind(this);

    }

    closeAllPopups() {
        this.setState(
            {
                isEditProfilePopupOpen: false,
                isAddPlacePopupOpen: false,
                isEditAvatarPopupOpen: false,
                isImagePopupOpen: false,
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

    render() {
        return (
            <div className="App">

                <div className="page">
                    <Header />
                    <Main openPopupEditProfile={this.openPopupEditProfile} openPopupAddPost={this.openPopupAddPost} openPopupAvatar={this.openPopupAvatar} />
                    <Footer />
                    <PopupWithForm onClose={this.closeAllPopups} title="Редактировать профиль" name="edit-profile" isOpened={this.state.isEditProfilePopupOpen}>
                        <input id="name-input" type="text" className="popup__input popup__input_form-name"
                            placeholder="Ваше имя" name="username" required minLength="2" maxLength="40" value="" />
                        <span className="popup__type-input-error name-input-error" />
                        <input id="about-input" type="text" className="popup__input popup__input_form-about"
                            placeholder="Расскажите о себе..." name="about" required minLength="2" maxLength="200" value="" />
                        <span className="popup__type-input-error about-input-error"></span>
                    </PopupWithForm>

                    <PopupWithForm onClose={this.closeAllPopups} title="Новое место" name="add-photo" isOpened={this.state.isAddPlacePopupOpen}>
                        <input id="photo-input" type="text" className="popup__input popup__input_form-title"
                            placeholder="Описание фото" name="name" required minLength="2" maxLength="30" value="" />
                        <span className="popup__type-input-error photo-input-error"></span>
                        <input id="link-input" type="url" className="popup__input popup__input_form-link"
                            placeholder="Ссылка на фото" name="link" required value="" />
                        <span className="popup__type-input-error link-input-error"></span>
                    </PopupWithForm>

                    <PopupWithForm onClose={this.closeAllPopups} title="Обновить аватар" name="update-avatar" isOpened={this.state.isEditAvatarPopupOpen}>
                        <input id="avatar-link-input" type="url" className="popup__input popup__input_form-link"
                            placeholder="Ссылка на фото" name="link" required value="" />
                        <span className="popup__type-input-error avatar-link-input-error"></span>
                    </PopupWithForm>

                    <PopupWithForm onClose={this.closeAllPopups} title="Вы уверены?" name="popup-delete" />

                    <ImagePopup onClose={this.closeAllPopups} isOpened={this.state.isImagePopupOpen}
                    title="Test" image="chrome://branding/content/about-logo.png"/>


                </div>
            </div>
        );
    }

}

export default App;
