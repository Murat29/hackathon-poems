import iconclassNamemates from "../images/лого-ок.svg";
import iconVk from "../images/лого-вк.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <ul className="info-list">
          <li className="info-list__helpful-info">
            <a>Условия обслуживания</a>
          </li>
          <li className="info-list__helpful-info">
            <a>Политика конфиденциальности</a>
          </li>
          <li>
            <p className="info-list__helpful-info info-list__helpful-info_type_mobile">Гражданин-поэт, 2025 г.</p>
            <p className="info-list__helpful-info info-list__helpful-info_type_desktop">Официальный сайт Гражданин-поэт, 2025 г.</p>
          </li>
        </ul>
        <nav className="social-icons">
          <a href="#" className="social-icons__icon-OK">
            <img src={iconclassNamemates} alt="лого-ОК"></img>
          </a>
          <a href="#" className="social-icons__icon-Vk">
            <img src={iconVk} alt="лого-ВК"></img>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
