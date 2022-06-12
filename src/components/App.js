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
                <div>
                    <PopupWithForm popup="popup_profile" handleFormSubmit=""/>
                    
                </div>



            </div>

        </div>

    );
}

export default App;
