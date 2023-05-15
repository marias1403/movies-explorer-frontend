import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../UseFormValidation/UseFormValidation';

function Login(props) {
  const  {data, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(data.email, data.password);
  }

  return (
    <section className='auth page__auth section content__section'>
      <Link className='link' to='/'>
        <img className='auth__logo' src={logo} alt='Логотип'/>
      </Link>
      <h2 className='auth__title'>Рады видеть!</h2>
      <form onSubmit={handleSubmit} className='auth__form'>
        <div className='auth__input-wrapper'>
          <label className='auth__label' htmlFor='loginEmail'>E-mail</label>
          <input
            id='loginEmail'
            type='email'
            name='email'
            className='auth__input'
            placeholder='Email'
            pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
            required
            aria-label='registerEmail'
            onChange={handleChange}
          />
          <span id='loginEmail-error' className='auth__error'>
            { errors.email ? errors.email : null }
          </span>
        </div>
        <div className='auth__input-wrapper'>
          <label className='auth__label' htmlFor='registerPassword'>Пароль</label>
          <input
            id='registerPassword'
            type='password'
            name='password'
            className='auth__input'
            placeholder=''
            required
            aria-label='registerPassword'
            onChange={handleChange}
          />
          <span id='registerPassword-error' className='auth__error'>
            { errors.password ? errors.password : null }
          </span>
        </div>
        <button type='submit' disabled={!isValid} className='submit-button submit-button_login button'>Войти</button>
        <p className='auth__link'>Ещё не зарегистрированы? <Link to='/signup' className='auth__link auth__link_type_blue link'>Регистрация</Link></p>
      </form>
    </section>
  );
}

export default Login;
