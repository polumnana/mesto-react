import React from "react";
import imageClose from "../images/Close_edit_Icon.svg"

class PopupWithForm extends React.Component {
    constructor(props) {
        super(props);
        this._onClose = props.onClose;
        this.close = this.close.bind(this);
        // this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValue = {};
        this._inputList.forEach((item) => {
            this._formValue[item.name] = item.value;
        });

        return this._formValue;
    } // собирает данные всех полей формы
    
    close() {
        this._onClose();
        // this._form.reset();
    }

    render() {

        const classesList = this.props.isOpened ? "popup popup_opened" : "popup";
        return (
            <section className={classesList}>
                <div className="popup__container">
                    <h2 className="popup__title">{this.props.title}</h2>
                    <form className={`popup__form popup__form_${this.props.name}`} name={this.props.name} noValidate>
                        {this.props.children}
                        <button type="submit"
                            className={`popup__form-submit popup__form-submit_${this.props.name} popup__form-submit_disabled`}>Сохранить</button>
                    </form>
                    <button onClick={this.close} type="reset" className={`popup__close-form popup__close-form_${this.props.name}`} aria-label>
                        <img src={imageClose} alt="Кнопка закрыть крестик"
                            className="popup__close-form-img" />
                    </button>
                </div>
            </section>
        );
    }
}

export default PopupWithForm;