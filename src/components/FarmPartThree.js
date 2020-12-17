import statusBar3 from "../images/status-bar-3.svg";
import iconAddress from "../images/icon-address.svg";

function FarmPartThree() {
  return (
    <main className="application-form">
      <h2 className="application-form__title">текст заголовка</h2>
      <img className="application-form__status-bar" src={statusBar3} alt="Статус-бар"></img>

      <form className="application-form__form">
        <h3 className="application-form__subtitle">текст подзаголовка</h3>
        <p className="application-form__text application-form__text_type_address">
          <img className="application-form__icon-address" src={iconAddress}></img>адрес
        </p>
        <div className="application-form__poem-container">
          <p className="application-form__text"></p>
        </div>
        <button
          className="application-form__button application-form__button_type_back"
          type="button"
        >
          назад к редактированию
        </button>
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

export default FarmPartThree;
