import React from "react";
import imageClose from "../images/Close_edit_Icon.svg"

class PopupWithForm extends React.Component {
    constructor(props) {
        super(props);
        this._handleFormSubmit = props.handleFormSubmit;
        // this._inputList = this._form.querySelectorAll('.popup__input');
        this.state = {
            popupIsOpened: props.isOpened,
        };
    }

    _getInputValues() {
        this._formValue = {};
        this._inputList.forEach((item) => {
            this._formValue[item.name] = item.value;
        });

        return this._formValue;
    } // собирает данные всех полей формы

    open() {
        this.setState({ popupIsOpened: true });
        document.addEventListener('keydown', this._handleEscCloseWithBind);
    }
    
    close() {
        document.removeEventListener('keydown', this._handleEscCloseWithBind);
        this._form.reset();
    }

    render() {

        const classesList = this.state.popupIsOpened ? "popup popup_profile popup_opened" : "popup popup_profile";
        return (
            <section className={classesList}>
                <div className="popup__container">
                    <h2 className="popup__title">{this.props.title}</h2>
                    <form className={`popup__form popup__form_${this.props.name}`} name={this.props.name} noValidate>
                        <input id="name-input" type="text" className="popup__input popup__input_form-name"
                            placeholder="Ваше имя" name="username" required minLength="2" maxLength="40" value="" />
                        <span className="popup__type-input-error name-input-error" />
                        <input id="about-input" type="text" className="popup__input popup__input_form-about"
                            placeholder="Расскажите о себе..." name="about" required minLength="2" maxLength="200" value="" />
                        <span className="popup__type-input-error about-input-error"></span>
                        <button type="submit"
                            className={`popup__form-submit popup__form-submit_${this.props.name} popup__form-submit_disabled`}>Сохранить</button>
                    </form>
                    <button type="reset" className={`popup__close-form popup__close-form_${this.props.name}`} aria-label>
                        <img src={imageClose} alt="Кнопка закрыть крестик"
                            className="popup__close-form-img" />
                    </button>
                </div>
            </section>
        );
    }
}

export default PopupWithForm;