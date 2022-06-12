import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';


// import './App.css';

function App() {
    return (
        <div className="App">

            <div className="page">
                <Header />
                <Main />
                <Footer />
                <PopupWithForm handleFormSubmit="" title="Редактировать профиль" name="edit-profile" />
                <PopupWithForm handleFormSubmit="" title="Новое место" name="add-photo" isOpened="true" />
                <PopupWithForm handleFormSubmit="" title="Обновить аватар" name="update-avatar" />
                <PopupWithForm handleFormSubmit="" title="Вы уверены?" name="popup-delete" />
            </div>
        </div>
    );
}

export default App;
