import statusBar4 from "../images/status-bar-4.svg";
import iconAddressWhite from "../images/icon-address-white.svg";
import React from "react";
import NewAppealContext from "./contexts/NewAppealContext";

function FormPartThree() {
  const NewAppeal = React.useContext(NewAppealContext);

  return (
    <main className="application-form">
      <h2 className="application-form__title">Инициатива отправлена!</h2>
      <img className="application-form__status-bar" src={statusBar4} alt="Статус-бар"></img>

      <form className="application-form__form">
        <div className="application-form__appeal-container">
          <p className="application-form__text">{NewAppeal.theme}</p>
          <p className="application-form__text">
            <img className="application-form__icon-address" src={iconAddressWhite}></img>
            {NewAppeal.address.value}
          </p>
          <p className="application-form__text" style={{ marginTop: "38px" }}>
            ждет модерации
          </p>
          <p className="application-form__text">отправленно {NewAppeal.data}</p>
        </div>
        <button
          className="application-form__button application-form__button_type_light"
          type="button"
          style={{ marginBottom: "40px" }}
        >
          посмотреть историю
        </button>
      </form>
    </main>
  );
}

export default FormPartThree;
