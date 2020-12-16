import iconMenu from "../images/icon-menu.svg";
import iconProfile from "../images/icon-profile.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__menu" src={iconMenu} alt="Меню"></img>
        <p className="header__logo">ЛОГО</p>
        <img className="header__profile" src={iconProfile} alt="Личный кабанет"></img>
      </div>
    </header>
  );
}

export default Header;
