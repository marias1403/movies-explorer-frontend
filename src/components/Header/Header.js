import React from 'react';
import { NavLink } from 'react-router-dom';
import moviesLogo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header header_authorized page__header section'>
      <div className='header__wrapper'>
        <div className='header__logo-container'>
          <img className='header__logo' src={moviesLogo} alt='Логотип проекта Movies-explorer'/>
          <div className='header__nav-container header__element_hidden'>
            <NavLink to='/movies' className='header__link link'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='header__link link'>Сохранённые фильмы</NavLink>
          </div>
        </div>
        <div className='header__container'>
          <NavLink to='/sign-up' className='header__link link'>Регистрация</NavLink>
          <button className='header__button button'>Войти</button>
          <div className='header__account-wrapper header__element_hidden'>
            <NavLink to='/profile' className='header__link link'>Аккаунт</NavLink>
            <div className='header__link-icon link'></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
