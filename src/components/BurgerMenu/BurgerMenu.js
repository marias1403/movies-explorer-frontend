import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = isMenuOpen ? 'burger-menu__popup_opened' : '';
  const isMenuHidden = props.loggedIn ? '' : 'burger-menu__toggle_hidden';

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className='burger-menu'>
      <button onClick={openMenu} className={`burger-menu__toggle button ${isMenuHidden}`}></button>
      <div onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closeMenu();
        }
      }} className={`burger-menu__popup ${isOpen}`}>
        <div className='burger-menu__container'>
          <button onMouseDown={closeMenu} className='burger-menu__close-button button'></button>
          <nav className='burger-menu__nav'>
            <ul className='burger-menu__list'>
              <li><NavLink onClick={closeMenu} className='burger-menu__link' to='/'>Главная</NavLink></li>
              <li><NavLink onClick={closeMenu} className='burger-menu__link' to='/movies'>Фильмы</NavLink></li>
              <li><NavLink onClick={closeMenu} className='burger-menu__link' to='/saved-movies'>Сохранённые фильмы</NavLink></li>
            </ul>
            <NavLink to='/profile' onClick={closeMenu} className='burger-menu__link burger-menu__link_account link'>Аккаунт<div className='burger-menu__link-icon link'></div></NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
