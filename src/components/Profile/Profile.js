import React from 'react';

function Profile() {
  return (
    <section className='profile page__profile section content__section'>
      <div className='profile__wrapper'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <div className='profile__input-wrapper'>
            <label className='profile__label' htmlFor='profileName'>Имя</label>
            <input
              id='profileName'
              type='text'
              name='profileName'
              className='profile__input'
              placeholder='Виталий'
              required
              aria-label='profileName'
            />
          </div>
          <div className='profile__input-wrapper'>
            <label className='profile__label' htmlFor='profileEmail'>E-mail</label>
            <input
              id='profileEmail'
              type='email'
              name='profileEmail'
              className='profile__input'
              placeholder='pochta@yandex.ru'
              required
              aria-label='profileEmail'
            />
          </div>
          <button type='button' className='profile__button button'>Редактировать</button>
          <button type='button' className='profile__button profile__button_logout button'>Выйти из аккаунта</button>
          <button type='submit-button' className='profile__submit-button profile__submit-button_hidden button'>Сохранить</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
