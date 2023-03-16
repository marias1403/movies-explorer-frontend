import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className='auth page__auth section content__section'>
      <img className='auth__logo' src={logo} alt='Логотип'/>
      <h2 className='auth__title'>Добро пожаловать!</h2>
      <form className='auth__form'>
        <label className='auth__label' htmlFor='registerName'>Имя</label>
        <input
          id='registerName'
          type='text'
          name='name'
          className='auth__input'
          placeholder='Виталий'
          required
          aria-label='registerName'
        />
        <span id='registerName-error' className='auth__error'></span>
        <label className='auth__label' htmlFor='registerEmail'>E-mail</label>
        <input
          id='registerEmail'
          type='email'
          name='email'
          className='auth__input'
          placeholder='pochta@yandex.ru'
          required
          aria-label='registerEmail'
        />
        <span id='registerEmail-error' className='auth__error'></span>
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
        <button type='submit' className='auth__submit-button auth__submit-button_register button'>Зарегистрироваться</button>
        <p className='auth__link'>Уже зарегистрированы? <Link to='/signin' className='auth__link auth__link_type_blue link'>Войти</Link></p>
      </form>
    </section>
  );
}

export default Register;
