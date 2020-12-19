import statusBar1 from "../images/status-bar-1.svg";
import React from "react";
import { Link } from "react-router-dom";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import NewAppealContext from "./contexts/NewAppealContext";

function FormPartOne({ SetNewAppeal }) {
  const [valueAdress, setValueAdress] = React.useState();

  const [valueSelect, setValueSelect] = React.useState("");

  const NewAppeal = React.useContext(NewAppealContext);

  function handleSubmit() {
    SetNewAppeal({ ...NewAppeal, theme: valueSelect, address: valueAdress, theme: valueSelect });
  }

  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar1} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <select
          value={valueSelect || ""}
          onChange={(e) => {
            setValueSelect(e.target.value);
          }}
          className="application-form__input application-form__input_type_select"
          required
        >
          <option hidden>выберите тему</option>
          <option value="тема1">тема</option>
          <option value="тема2">тема</option>
          <option value="тема3">тема</option>
        </select>
        <AddressSuggestions
          count="5"
          token="501ad6982cf8c5084aa6b8a83e3042fbef29fa9e"
          value={valueAdress}
          onChange={setValueAdress}
        ></AddressSuggestions>

        <button
          onClick={handleSubmit}
          className="application-form__button application-form__button_type_submit"
          type="submit"
        >
          <Link to="/form-part-two" className="application-form__routing-link">
            продолжить
          </Link>
        </button>
      </form>
    </main>
  );
}

export default FormPartOne;
