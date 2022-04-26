import { useState, useEffect } from 'react';
import logo from '../../images/header-logo.svg';
import phone from '../../images/icon-phone.svg';
import mail from '../../images/icon-mail.svg';


const Header = () => {

  const [size, setSize] = useState(window.innerWidth);
  const [mobileScreenSize, setMobileScreenSize] = useState(false);

  const updateWidth = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    countMovies(size)

    return () => window.removeEventListener("resize", updateWidth);
  }, [size])

  const countMovies = (size) => {
    if (size < 500) setMobileScreenSize(true);
    else setMobileScreenSize(false);
  }

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo"/>
      {
        !mobileScreenSize ? 
        <div className="header__links-container">
          <a className="header__link" href="tel:+74957873422">8 800 000 00 00</a>
          <a className="header__link" href="mailto:sales@logo.ru">sales@logo.ru</a>
        </div> :
        <div className="header__links-container">
          <a className="header__link" href="tel:+74957873422"><img src={phone} alt="Логотип" className="header__link-image"/></a>
          <a className="header__link" href="mailto:sales@logo.ru"><img src={mail} alt="Логотип" className="header__link-image"/></a>
        </div>
      }
    </header>
  );
}

export default Header;
