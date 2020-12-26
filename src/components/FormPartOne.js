import statusBar1 from "../images/status-bar-1.svg";
import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import NewAppealContext from "./contexts/NewAppealContext";
import { useHistory } from "react-router-dom";

function FormPartOne({ SetNewAppeal }) {
  const history = useHistory();

  const [valueAddress, setValueAddress] = React.useState();

  const [valueSelect, setValueSelect] = React.useState("");

  const NewAppeal = React.useContext(NewAppealContext);

  function onChangeSelect(evt) {
    setValueSelect(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (valueAddress && valueSelect) {
      history.push("/form-part-two");
      SetNewAppeal({ ...NewAppeal, theme: valueSelect, address: valueAddress, theme: valueSelect });
    }
  }

  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar1} alt="Статус-бар"></img>

      <form name="form" className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <select
          value={valueSelect || ""}
          onChange={onChangeSelect}
          className="application-form__input application-form__input_type_select"
          required="required"
        >
          <option hidden>выберите тему</option>
          <option value="тема1">тема1</option>
          <option value="тема2">тема2</option>
          <option value="тема3">тема3</option>
        </select>
        <AddressSuggestions
          required="required"
          count="5"
          token="501ad6982cf8c5084aa6b8a83e3042fbef29fa9e"
          value={valueAddress}
          onChange={setValueAddress}
        ></AddressSuggestions>

        <button
          onClick={handleSubmit}
          className={`application-form__button application-form__button_type_submit ${
            !(valueAddress && valueSelect) && "application-form__button_disabled"
          }`}
          type="submit"
        >
          продолжить
        </button>
      </form>
    </main>
  );
}

export default FormPartOne;
