import React from 'react';
import logo from '../Header/header_image/logo.svg'
import s from './Header.module.css'

export const Header = () => {
  return (
    <div className='container'>
      <div className={s.wrapper}>
        <nav className={s.nav}>
          <div>
            <a href="/" className={s.logo}>
              <img src={logo} alt="logo"/>
            </a>
          </div>
          <ul className={s.navList}>
            <li className={s.navItem}><a href="/" className={s.navLink}>About</a></li>
            <li className={s.navItem}><a href="/" className={s.navLink}>Services</a></li>
            <li className={s.navItem}><a href="/" className={s.navLink}>Pricing</a></li>
            <li className={s.navItem}><a href="/" className={s.navLink}>Blog</a></li>
          </ul>
          <div className={s.contactWrapper}>
            <a className={s.contact} href="tel: '+7--------'">Contact</a>
          </div>
        </nav>
        <h1 className={s.headerTitle}>Portfolio</h1>
        <p className={s.description}>Agency provides a full service range including technical skills, design, business
          understanding.</p>
      </div>
    </div>
  );
};

