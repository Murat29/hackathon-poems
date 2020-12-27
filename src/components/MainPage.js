import { Link } from "react-router-dom";
import microphone from "../images/микрофон.svg";
import lightbulb from "../images/лампочка.svg";
import checkMark from "../images/галочка.svg";
import leadImage from "../images/lead-image.png";
import infoPhotoOne from "../images/info-pic-one.png";
import infoPhotoTwo from "../images/info-pic-two.png";
import infoPhotoThree from "../images/info-pic-three.png"

function MainPage() {
  return (
    <main className="main">
      <section className="lead">
        <img src={leadImage} alt="люди, которые обнимаются" className="lead__image">
        </img>
        <h1 className="lead__title">
          Гражданин-поэт – говорите с властью на одном языке!
        </h1>

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
        <h2 className="info__title">
          Как это работает?
        </h2>
        <ul className="info__items">
          <li className="item">
            <img src={infoPhotoOne} alt="изображение двух голов" className="item__image"></img>
            <p className="item__text">
              Вы создаете инициативы в форме стихотворения – мы помогаем соблюдать цензуру
            </p>
          </li>
          <li className="item">
            <img src={infoPhotoTwo} alt="изображение человека" className="item__image"></img>
            <p className="item__text">
              Инициатива должна пройти модерацию и набрать хотя бы 100 голосов
            </p>
          </li>
          <li className="item">
            <img src={infoPhotoThree} alt="изображение думающего человека" className="item__image"></img>
            <p className="item__text">
              Если все получилось, инициативы реализуются
            </p>
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
