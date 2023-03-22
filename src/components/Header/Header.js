import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header page__header section'>
      <div className='header__wrapper'>
        <div className='header__logo-container'>
          <NavLink className='header__logo link' to='/'></NavLink>
          <div className='header__nav-container'>
            <NavLink to='/movies' className='header__link link'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='header__link link'>Сохранённые фильмы</NavLink>
          </div>
        </div>
        <div className='header__container'>
          <NavLink to='/signup' className='header__link header__link_hidden link'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__button header__button_hidden link'>Войти</NavLink>
          <div className='header__account-wrapper'>
            <NavLink to='/profile' className='header__link link'>Аккаунт</NavLink>
            <div className='header__link-icon link'></div>
          </div>
          <button className='header__burger-menu button'></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
