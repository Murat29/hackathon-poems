import iconClassmates from "../images/icon-classmates.svg";
import iconVk from "../images/icon-vk.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text-container">
          <a className="footer__link" href="#">
            Условия обслуживания
          </a>
          <a className="footer__link" href="#">
            Политика конфиденциальности
          </a>
          <p className="footer__text">Официальный сайт Гражданин-поэт, 2025 г.</p>
        </div>
        <div className="footer__icons">
          <img className="footer__icon-classmates" src={iconClassmates} alt="Однокласники"></img>
          <img className="footer__icon-vk" src={iconVk} alt="Вконтакте"></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
