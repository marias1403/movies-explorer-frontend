import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {
  const location = useLocation();
  const isSignUpButtonHidden = props.loggedIn ? 'header__link_hidden' : '';
  const isSignInButtonHidden = props.loggedIn ? 'header__button_hidden' : '';
  const isAccountButtonHidden = props.loggedIn ? '' : 'header__link_hidden';
  const isNavContainerHidden = props.loggedIn ? '' : 'header__nav-container_hidden';

  let headerStyle = {};

  if (location.pathname === '/') {
    headerStyle.backgroundColor = '#073042';
  } else {
    headerStyle.backgroundColor = '#202020';
  }

  return (
    <header style={headerStyle} className='header page__header section'>
      <div className='header__wrapper'>
        <div className='header__logo-container'>
          <NavLink className='header__logo link' to='/'></NavLink>
          <div className={`header__nav-container ${isNavContainerHidden}`}>
            <NavLink to='/movies' className='header__link link'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='header__link link'>Сохранённые фильмы</NavLink>
          </div>
        </div>
        <div className='header__container'>
          <NavLink to='/signup' className={`header__link link ${isSignUpButtonHidden}`}>Регистрация</NavLink>
          <NavLink to='/signin' className={`header__button button ${isSignInButtonHidden}`}>Войти</NavLink>
          <NavLink to='/profile' className={`header__link header__link_account link ${isAccountButtonHidden}`}>Аккаунт<div className='header__link-icon link'></div></NavLink>
          <BurgerMenu loggedIn={props.loggedIn}/>
        </div>
      </div>
    </header>
);
}

export default Header;
