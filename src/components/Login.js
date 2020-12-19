import { Link } from "react-router-dom";
import React from "react";

function Login() {
  const [openedPopupRegistration, setOpenedPopupRegistration] = React.useState(false);
  const [openedPopupPublicServices, setOpenedPopupPublicServices] = React.useState(false);

  return (
    <main className="content">
      <section className="entry">
        <button type="button" className="entry__button">
          Вход
        </button>
        <form className="form">
          <label className="form__label">
            <input type="text" className="form__input" placeholder="Мобильный телефон или почта" />
          </label>
          <label className="form__label">
            <input type="password" className="form__input" placeholder="Пароль" />
            <button type="button" className="form__button-close-password"></button>
          </label>
          <a className="form__link">Я не помню пароль</a>
          <Link to="/form-part-one">
            <button type="button" className="form__button">
              Войти
            </button>
          </Link>

          <button
            onClick={() => {
              setOpenedPopupPublicServices(true);
            }}
            type="button"
            className="form__button"
          >
            Войти через Госуслуги
          </button>
          <a
            className="form__link form__link_position_last-of-type"
            onClick={() => {
              setOpenedPopupRegistration(true);
            }}
          >
            Зарегистрироваться
          </a>
        </form>
      </section>
      <section className={`popup ${openedPopupRegistration && "popup_opened"}`}>
        <div className="popup__container">
          <div className="popup__title-block">
            <h2 className="popup__title">Регистрация</h2>
            <button
              type="button"
              className="popup__button-close"
              onClick={() => {
                setOpenedPopupRegistration(false);
              }}
            ></button>
          </div>
          <form className="form form_place_registrartion" name="form-registrartion">
            <label className="form__label form__label_place_registrartion">
              <input
                type="text"
                name="registrartion-login"
                className="form__input"
                placeholder="Мобильный телефон или почта"
              />
            </label>
            <label className="form__label form__label_place_registrartion">
              <input
                type="text"
                name="registrartion-password"
                className="form__input"
                placeholder="Пароль"
              />
              <button className="form__button-close-password"></button>
            </label>
            <p className="form__text">Минимальная длина пароля - 8 символов.</p>
            <p className="form__text">
              Нажимая на кнопку «Зарегистрироваться», &shy;Вы принимаете наши{" "}
              <a href="#" className="form__link form__link_place_registrartion">
                Условия обслуживания.
              </a>
            </p>
            <p className="form__text">
              Читать{" "}
              <a href="#" className="form__link form__link_place_registrartion">
                Политика конфиденциальности.
              </a>
            </p>
            <button type="submit" className="form__button-submit">
              Принять и зарегистрироваться
            </button>
          </form>
        </div>
      </section>
      <section className={`popup ${openedPopupPublicServices && "popup_opened"}`}>
        <div className="popup__container">
          <div className="popup__title-block">
            <h2 className="popup__title">Госуслуги</h2>
            <button
              onClick={() => {
                setOpenedPopupPublicServices(false);
              }}
              type="button"
              className="popup__button-close"
            ></button>
          </div>
          <form className="form" name="form-registrartion">
            <label className="form__label form__label_place_registrartion">
              <input
                type="text"
                name="registrartion-login"
                className="form__input"
                placeholder="Мобильный телефон или почта"
              />
            </label>
            <label className="form__label form__label_place_registrartion">
              <input
                type="text"
                name="registrartion-password"
                className="form__input"
                placeholder="Пароль"
              />
              <button className="form__button-close-password"></button>
            </label>
            <a href="#" className="form__link">
              Я не помню пароль
            </a>
            <button
              type="submit"
              className="form__button-submit form__button-submit_place_registrartion"
            >
              Войти
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
