import React from "react";
import imageClose from "../images/Close_edit_Icon.svg"

class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupIsOpened: props.isOpened,
        };
    }

    open() {
        this.setState({ popupIsOpened: true });
        document.addEventListener('keydown', this._handleEscCloseWithBind);
    }

    close() {
        document.removeEventListener('keydown', this._handleEscCloseWithBind);
    }

    render() {

        const classesList = this.state.popupIsOpened ? "popup popup_opened" : "popup";
        return (
            <section className={classesList}>
                <div className="popup__preview">
                    <img className="popup__img" src={this.props.src} />
                    <p className="popup__text"></p>
                    <button type="reset" className="popup__close-form popup__close-form_preview" aria-label>
                        <img src={imageClose} alt="Кнопка закрыть крестик"
                            className="popup__close-form-img" />
                    </button>
                </div>
            </section>
        );
    }
}

export default ImagePopup;