import buttonEdit from './images/Edit_Button.svg';
import buttonAddPost from './images/Add_post.svg';
import avatar from './images/Avatar.jpg';

function Main() {
    return (
        <main class="content">
            <section className="profile">
                <button type="button" className="profile__button-avatar" aria-label>
                    <img src={avatar} alt="Аватар пользователя" className="profile__avatar" />
                    <div className="profile__overlay">
                        <img src={buttonEdit} alt="Кнопка карандашик" className="profile__edit-avatar" />
                    </div>
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__button-edit" aria-label>
                        <img src={buttonEdit} alt="Кнопка карандашик" className />
                    </button>
                </div>
                <p className="profile__info-about">Исследователь океана</p>
                <button type="button" className="profile__button-add" aria-label>
                    <img src={buttonAddPost} alt="Кнопка плюсик" className />
                </button>
            </section>

            <section className="elements">
            </section>


            <template class="element-template">
                <article class="element">
                    <img class="element__img" />
                    <h2 class="element__title"></h2>
                    <div class="element__like">
                        <button type="button" class="element__button-like" aria-label></button>
                        <span class="element__counter-like"></span>
                    </div>
                    <button type="button" class="element__delete" aria-label>
                        <img src="<%=require('./images/Delete.svg')%>" alt="Корзина удалить"
                            class="element__delete-img" />
                    </button>
                </article>

            </template>

        </main>
    );
}

export default Main;