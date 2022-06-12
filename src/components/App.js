import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';



function App() {
    return (
        <div className="App">

            <div className="page">
                <Header />
                <Main />
                <Footer />
                <PopupWithForm handleFormSubmit="" title="Редактировать профиль" name="edit-profile" isOpened="true">
                    <input id="name-input" type="text" className="popup__input popup__input_form-name"
                        placeholder="Ваше имя" name="username" required minLength="2" maxLength="40" value="" />
                    <span className="popup__type-input-error name-input-error" />
                    <input id="about-input" type="text" className="popup__input popup__input_form-about"
                        placeholder="Расскажите о себе..." name="about" required minLength="2" maxLength="200" value="" />
                    <span className="popup__type-input-error about-input-error"></span>
                </PopupWithForm>

                <PopupWithForm handleFormSubmit="" title="Новое место" name="add-photo">
                    <input id="photo-input" type="text" class="popup__input popup__input_form-title"
                        placeholder="Описание фото" name="name" required minLength="2" maxLength="30" value="" />
                    <span class="popup__type-input-error photo-input-error"></span>
                    <input id="link-input" type="url" class="popup__input popup__input_form-link"
                        placeholder="Ссылка на фото" name="link" required value="" />
                    <span class="popup__type-input-error link-input-error"></span>
                </PopupWithForm>

                <PopupWithForm handleFormSubmit="" title="Обновить аватар" name="update-avatar">
                    <input id="avatar-link-input" type="url" class="popup__input popup__input_form-link"
                        placeholder="Ссылка на фото" name="link" required value="" />
                    <span class="popup__type-input-error avatar-link-input-error"></span>
                </PopupWithForm>

                <PopupWithForm handleFormSubmit="" title="Вы уверены?" name="popup-delete" />

                <ImagePopup />

                
            </div>
        </div>
    );
}

export default App;
