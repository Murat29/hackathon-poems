import statusBar4 from "../images/status-bar-4.svg";
import React from "react";
import NewAppealContext from "./contexts/NewAppealContext";

function FormPartThree() {
  const NewAppeal = React.useContext(NewAppealContext);
  console.log(NewAppeal.data);

  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar4} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <div
          className="application-form__appeal-container"
          style={{ background: "#c4c4c4", color: "#000" }}
        >
          <p className="application-form__text">{NewAppeal.status}</p>
          <p className="application-form__text">{NewAppeal.theme}</p>
          <p className="application-form__text">
            {NewAppeal.address ? NewAppeal.address.value : ""}
          </p>
          {NewAppeal.poem &&
            NewAppeal.poem.map((el) => <p className="application-form__text">{el}</p>)}
          <p className="application-form__text">{NewAppeal.data}</p>
        </div>
        <button
          className="application-form__button application-form__button_type_history"
          type="button"
        >
          посмотреть историю
        </button>
      </form>
    </main>
  );
}

export default FormPartThree;
