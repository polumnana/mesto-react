import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';



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

                <PopupWithForm handleFormSubmit="" title="Новое место" name="add-photo"  />
                <PopupWithForm handleFormSubmit="" title="Обновить аватар" name="update-avatar" />
                <PopupWithForm handleFormSubmit="" title="Вы уверены?" name="popup-delete" />
            </div>
        </div>
    );
}

export default App;
