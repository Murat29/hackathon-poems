import statusBar1 from "../images/status-bar-1.svg";

function FormParOne() {
  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar1} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <select className="application-form__input application-form__input_type_select" required>
          <option value="" disabled selected hidden>
            выберите тему
          </option>
          <option value="0">тема</option>
          <option value="1">тема</option>
          <option value="3">тема</option>
        </select>
        <input className="application-form__input" placeholder="введите адрес"></input>
        <button
          className="application-form__button application-form__button_type_submit"
          type="submit"
        >
          продолжить
        </button>
      </form>
    </main>
  );
}

export default FormParOne;
