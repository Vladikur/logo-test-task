import logo from '../../images/footer-logo.svg';


const Footer = () => {


  return (
    <footer className="footer">
      <img src={logo} alt="Логотип" className="footer__logo"/>
      <p className="footer__copyright">&copy; ООО «Лого», 2008—2022</p>
      <nav>
        <ul className="footer__links">
          <li><a href="foo" className="footer__link">Решения</a></li>
          <li><a href="foo" className="footer__link">Оборудование</a></li>
          <li><a href="foo" className="footer__link">О компании</a></li>
          <li><a href="foo" className="footer__link">Блог</a></li>
       </ul>
      </nav>
    </footer>
  );
}

export default Footer;
