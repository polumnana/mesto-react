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
                <PopupWithForm handleFormSubmit="" title="Редактировать профиль" name="edit-profile" isOpened="true" />
                <PopupWithForm handleFormSubmit="" title="Новое место" name="" />
                <PopupWithForm handleFormSubmit="" title="Обновить аватар" name="" />
                <PopupWithForm handleFormSubmit="" title="Вы уверены?" name="" />
            </div>
        </div>
    );
}

export default App;
