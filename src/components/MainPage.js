import { Link } from "react-router-dom";
import microphone from "../images/микрофон.svg";
import lightbulb from "../images/лампочка.svg";
import checkMark from "../images/галочка.svg";

function MainPage() {
  return (
    <main className="main">
      <section className="lead">
        <div className="lead__future-img">
          <p className="lead__text-img">изображение</p>
        </div>
        <div className="lead__infolist-block">
          <ul className="lead__infolist">
            <li className="lead__info-item">
              <span className="lead__number">2000</span>
              <p className="lead__text">Решенных проблем</p>
            </li>
            <li className="lead__info-item">
              <span className="lead__number">1000</span>
              <p className="lead__text">Неравнодушных граждан</p>
            </li>
          </ul>
        </div>

        <div className="lead__contanier">
          <p className="lead__contanier-text">
            Самое важное – сделать хоть что-то для достижения успеха
          </p>
          <Link to="/login">
            <button type="button" className="lead__button">
              Стать участником
            </button>
          </Link>
        </div>
      </section>
      <section className="info">
        <ul className="info__items">
          <li className="item">
            <img src={lightbulb} alt="изщбражение лампочки" className="item__image"></img>
            <p className="item__text">
              Граждане создают инициативы и опросы в форме стихотворения, публикуют их на нашем
              сайте
            </p>
          </li>
          <li className="item">
            <img src={microphone} alt="изображение микрофона" className="item__image"></img>
            <p className="item__text">Граждане голосуют за понравишуюся инициативу</p>
          </li>
          <li className="item">
            <img src={checkMark} alt="изображение галочки" className="item__image"></img>
            <p className="item__text">Администрация принимает решения по результатам голосования</p>
          </li>
        </ul>
      </section>
      <section className="irtiative-table">
        <h2 className="irtiative-table__title">
          Поданные инициативы <span className="irtiative-table__text-number">20</span>
        </h2>
        <ul className="irtiative-table__cards">
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Поставим памятник в конце длинной городской улицы...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Парк известный городской По соседству был с рекой...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Как неустойчива судьба Обыкновенной с виду лавочки!...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Как неустойчива судьба Обыкновенной с виду лавочки!...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="irtiative-table">
        <h2 className="irtiative-table__title">
          Принятые решения <span className="irtiative-table__text-number">10</span>
        </h2>
        <ul className="irtiative-table__cards">
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Поставим памятник в конце длинной городской улицы...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Парк известный городской По соседству был с рекой...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Как неустойчива судьба Обыкновенной с виду лавочки!...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Как неустойчива судьба Обыкновенной с виду лавочки!...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="irtiative-table">
        <h2 className="irtiative-table__title">
          Идет голосование <span className="irtiative-table__text-number">4</span>
        </h2>
        <ul className="irtiative-table__cards">
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Поставим памятник в конце длинной городской улицы...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
            <button type="button" className="card__button">
              Голосовать
            </button>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Парк известный городской По соседству был с рекой...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
            <button type="button" className="card__button">
              Голосовать
            </button>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Как неустойчива судьба Обыкновенной с виду лавочки!...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
            <button type="button" className="card__button">
              Голосовать
            </button>
          </li>
          <li className="card">
            <div className="card__texts">
              <p className="card__text">Как неустойчива судьба Обыкновенной с виду лавочки!...</p>
              <p className="card__subtext">Всего голосов 300</p>
              <p className="card__subtext card__subtext_position_last-of-type">
                Необходимо голосов 1000
              </p>
            </div>
            <button type="button" className="card__button">
              Голосовать
            </button>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default MainPage;
