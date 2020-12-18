import statusBar4 from "../images/status-bar-4.svg";

function FormPartThree() {
  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar4} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <div className="application-form__appeal-container">
          <p className="application-form__text"></p>
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
