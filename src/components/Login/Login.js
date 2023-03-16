import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className='auth page__auth section content__section'>
      <img className='auth__logo' src={logo} alt='Логотип'/>
      <h2 className='auth__title'>Рады видеть!</h2>
      <form className='auth__form'>
        <label className='auth__label' htmlFor='loginEmail'>E-mail</label>
        <input
          id='loginEmail'
          type='email'
          name='email'
          className='auth__input'
          placeholder='pochta@yandex.ru'
          required
          aria-label='registerEmail'
        />
        <span id='loginEmail-error' className='auth__error'></span>
        <label className='auth__label' htmlFor='registerPassword'>Пароль</label>
        <input
          id='registerPassword'
          type='password'
          name='password'
          className='auth__input'
          placeholder=''
          required
          aria-label='registerPassword'
        />
        <span id='registerPassword-error' className='auth__error'></span>
        <button type='submit' className='auth__submit-button button'>Войти</button>
        <p className='auth__link'>Ещё не зарегистрированы? <Link to='/signup' className='auth__link auth__link_type_blue link'>Регистрация</Link></p>
      </form>
    </section>
  );
}

export default Login;
