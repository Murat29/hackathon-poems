import iconMenu from "../images/иконка меню.svg";
import iconProfile from "../images/иконкапрофиля.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__icons">
        <button className="header__icon-menu">
          <img src={iconMenu} alt="меню сайта"></img>
        </button>
        <a href="#" className="header__icon-logo">
          ГП
        </a>
        <a href="#" className="header__icon-profile">
          <img src={iconProfile} alt="профиль пользователя"></img>
        </a>
      </nav>
      <nav className="header__icons header__icons_type_desktop">
        <a href="#" className="header__icon-logo header__icon-logo_type_desktop">
          Гражданин - поэт
        </a>
        <nav className="header__links">
          <a href="#" className="header__link">
            Главная
          </a>
          <a href="#" className="header__link">
            О сервисе
          </a>
          <a href="#" className="header__link">
            Инициативы
          </a>
          <a href="#" className="header__link">
            Результаты
          </a>
          <a href="#" className="header__link">
            Новости
          </a>
        </nav>
        <div className="header__icon-block">
          <button className="header__button-search"></button>
          <a href="#" className="header__icon-profile header__icon-profile_type_desktop">
            <img src={iconProfile} alt="профиль пользователя"></img>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
