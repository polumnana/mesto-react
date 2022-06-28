import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onAddCard({
            name: name,
            link: link,
        });
    }

    return (
        <PopupWithForm onSubmit={handleSubmit}
                       onClose={props.onClose}
                       isOpened={props.isOpened}
                       title="Новое место"
                       name="add-photo">
            <input onChange={handleChangeName} id="photo-input" type="text"
                   className="popup__input popup__input_form-title"
                   placeholder="Описание фото" name="name" required minLength="2" maxLength="30"
                   value={name}/>
            <span className="popup__type-input-error photo-input-error"></span>
            <input onChange={handleChangeLink} id="link-input" type="url"
                   className="popup__input popup__input_form-link"
                   placeholder="Ссылка на фото" name="link" required value={link}/>
            <span className="popup__type-input-error link-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;