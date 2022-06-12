import React from "react";
import imageClose from "../images/Close_edit_Icon.svg"

class PopupWithForm extends React.Component {
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
                    <button onClick={this.props.onClose} type="reset" className={`popup__close-form popup__close-form_${this.props.name}`} aria-label>
                        <img src={imageClose} alt="Кнопка закрыть крестик"
                            className="popup__close-form-img" />
                    </button>
                </div>
            </section>
        );
    }
}

export default PopupWithForm;