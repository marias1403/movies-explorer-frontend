import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header page__header section'>
      <div className='header__wrapper'>
        <div className='header__logo-container'>
          <NavLink className='header__logo link' to='/'></NavLink>
          <div className='header__nav-container header__nav-container_hidden'>
            <NavLink to='/movies' className='header__link link'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='header__link link'>Сохранённые фильмы</NavLink>
          </div>
        </div>
        <div className='header__container'>
          <NavLink to='/signup' className='header__link link'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__button link'>Войти</NavLink>
          <div className='header__account-wrapper header__account-wrapper_hidden'>
            <NavLink to='/profile' className='header__link link'>Аккаунт</NavLink>
            <div className='header__link-icon link'></div>
          </div>
          <button className='header__burger-menu button header__burger-menu_hidden'></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
