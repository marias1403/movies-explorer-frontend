import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../UseFormValidation/UseFormValidation';

function Register(props) {
  const  {data, handleChange, errors, isValid} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(data.name, data.email, data.password);
  }

  return (
    <section className='auth page__auth section content__section'>
      <img className='auth__logo' src={logo} alt='Логотип'/>
      <h2 className='auth__title'>Добро пожаловать!</h2>
      <form onSubmit={handleSubmit} className='auth__form'>
        <div className='auth__input-wrapper'>
          <label className='auth__label' htmlFor='registerName'>Имя</label>
          <input
            id='registerName'
            type='text'
            name='name'
            className='auth__input'
            placeholder='Имя'
            aria-label='registerName'
            minLength='2'
            maxLength='20'
            pattern='^[a-zA-Zа-яА-Я\s*\-]+$'
            required
            onChange={handleChange}
          />
          <span id='registerName-error' className='auth__error'>
            { errors.name ? errors.name : null }
          </span>
        </div>
        <div className='auth__input-wrapper'>
          <label className='auth__label' htmlFor='registerEmail'>E-mail</label>
          <input
            id='registerEmail'
            type='email'
            name='email'
            className='auth__input'
            placeholder='pochta@email.ru'
            aria-label='registerEmail'
            required
            onChange={handleChange}
          />
          <span id='registerEmail-error' className='auth__error'>
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
            placeholder='Пароль'
            aria-label='registerPassword'
            required
            minLength='6'
            maxLength='20'
            onChange={handleChange}
          />
          <span id='registerPassword-error' className='auth__error'>
            { errors.password ? errors.password : null }
          </span>
        </div>
        <button type='submit' disabled={!isValid} className='submit-button submit-button_register button'>Зарегистрироваться</button>
        <p className='auth__link'>Уже зарегистрированы? <Link to='/signin' className='auth__link auth__link_type_blue link'>Войти</Link></p>
      </form>
    </section>
  );
}

export default Register;
