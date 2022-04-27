import logo from '../../images/footer-logo.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import twitter from '../../images/twitter.svg';
import h from '../../images/h.svg';


const Footer = () => {


  return (
    <footer className="footer">
      <img src={logo} alt="Логотип" className="footer__logo"/>
      <div className="footer__icons">
        <img src={telegram} alt="Иконка" className="footer__icon"/>
        <img src={vk} alt="Иконка" className="footer__icon"/>
        <img src={twitter} alt="Иконка" className="footer__icon"/>
        <img src={h} alt="Иконка" className="footer__icon"/>
      </div>
      <nav>
        <ul className="footer__links">
          <li><a href="#" className="footer__link">Решения</a></li>
          <li><a href="#" className="footer__link">Оборудование</a></li>
          <li><a href="#" className="footer__link">О компании</a></li>
          <li><a href="#" className="footer__link footer__link_child_last">Блог</a></li>
       </ul>
      </nav>
      <p className="footer__copyright">&copy; ООО «Лого», 2008—2022</p>
      <p className="footer__copyright">Лицензия на телематические услуги № 176267</p>
    </footer>
  );
}

export default Footer;
