import React from 'react';
import {NavLink} from "react-router-dom";

function NavTab() {
  return (
    <div className='nav-tab'>
      <div className='nav-tab__container'>
        <button className='nav-tab__close-button button'></button>
        <nav className='nav-tab__link-wrapper'>
          <NavLink to='/' className='nav-tab__link link'>Главная</NavLink>
          <NavLink to='/movies' className='nav-tab__link link'>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='nav-tab__link link'>Сохранённые фильмы</NavLink>
        </nav>
        <div className='nav-tab__account-wrapper'>
          <NavLink to='/profile' className='nav-tab__account-link link'>Аккаунт</NavLink>
          <div className='nav-tab__account-link-icon link'></div>
        </div>
      </div>
    </div>
  );
}

export default NavTab;
