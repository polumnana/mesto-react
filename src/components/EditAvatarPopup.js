import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const linkAvatar = React.useRef(); // записываем объект, возвращаемый хуком, в переменную

    const [avatar, setAvatar] = React.useState('');

    function handleChangeAvatar(evt) {
        setAvatar(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateAvatar({
            avatar: linkAvatar.current.value, //значение инпута, полученное с помощью рефа
        });
        linkAvatar.current.value = '';
    }

    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            onClose={props.onClose}
            isOpened={props.isOpened}
            title="Обновить аватар"
            name="update-avatar">
            <input
                onChange={handleChangeAvatar}
                ref={linkAvatar}
                id="avatar-link-input"
                type="url"
                className="popup__input popup__input_form-link"
                placeholder="Ссылка на фото"
                name="link"
                required value={avatar}/>
            <span className="popup__type-input-error avatar-link-input-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;