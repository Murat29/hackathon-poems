import statusBar2 from "../images/status-bar-2.svg";
import React from "react";
import Input from "./Input.js";
import NewAppealContext from "./contexts/NewAppealContext";
import { useHistory } from "react-router-dom";

function FormPartTwo({ SetNewAppeal }) {
  const history = useHistory();

  const NewAppeal = React.useContext(NewAppealContext);
  const [inputs, setInputs] = React.useState([""]);
  const [poems, setPoems] = React.useState([]);

  function addInput() {
    if (inputs.length < 4) {
      setInputs([...inputs, ""]);
    }
  }

  function deleteInput(index) {
    setInputs(inputs.filter((el, i) => i !== index));
    setPoems(poems.filter((el, i) => i !== index));
  }

  function handleText(e, i) {
    let newInputs = [...inputs];
    newInputs[i] = e.target.value;
    setInputs(newInputs);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (inputs.length == poems.length) {
      SetNewAppeal({ ...NewAppeal, poem: poems });
      history.push("/form-part-three");
    }
  }

  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar2} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <p className="application-form__text">текст, подсказывающий как работать с формой</p>
        <p className="application-form__text">текст, подсказывающий как работать с формой</p>

        {inputs.map((el, i) => (
          <Input
            key={i}
            index={i}
            handleText={handleText}
            deleteInput={deleteInput}
            poems={poems}
            setPoems={setPoems}
            inputs={inputs}
          />
        ))}

        <button
          type="button"
          onClick={addInput}
          disabled={inputs.length > 3 ? true : false}
          className="application-form__button application-form__button_type_add-input"
        ></button>
        <button
          onClick={handleSubmit}
          className={`application-form__button application-form__button_type_submit ${
            !(inputs.length == poems.length) && "application-form__button_disabled"
          }`}
          type="submit"
        >
          продолжить
        </button>
      </form>
    </main>
  );
}

export default FormPartTwo;
