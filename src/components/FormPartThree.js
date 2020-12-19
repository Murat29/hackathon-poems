import statusBar3 from "../images/status-bar-3.svg";
import iconAddress from "../images/icon-address.svg";
import { Link } from "react-router-dom";
import React from "react";
import NewAppealContext from "./contexts/NewAppealContext";

function FormPartThree({ SetNewAppeal }) {
  const NewAppeal = React.useContext(NewAppealContext);

  function handleSubmit() {
    const data = new Date().toLocaleString();
    SetNewAppeal({ ...NewAppeal, data: data });
  }

  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar3} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <p className="application-form__text application-form__text_type_address">
          <img className="application-form__icon-address" src={iconAddress} alt="Адрес"></img>
          {NewAppeal.address ? NewAppeal.address.value : ""}
        </p>
        <div className="application-form__poem-container">
          {NewAppeal.poem &&
            NewAppeal.poem.map((el) => <p className="application-form__text">{el}</p>)}
        </div>
        <Link to="/form-part-two" style={{ alignSelf: "center" }}>
          <button
            className="application-form__button application-form__button_type_back"
            type="button"
          >
            назад к редактированию
          </button>
        </Link>
        <Link to="/form-part-four" style={{ alignSelf: "center" }}>
          <button
            onClick={handleSubmit}
            className="application-form__button application-form__button_type_submit"
            type="submit"
          >
            опубликовать
          </button>
        </Link>
      </form>
    </main>
  );
}

export default FormPartThree;
