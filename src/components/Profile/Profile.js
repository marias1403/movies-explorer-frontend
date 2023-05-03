import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../UseFormValidation/UseFormValidation';

function Profile(props) {
  const navigate = useNavigate();
  const  {data, handleChange, errors, isValid} = useFormWithValidation({
    profileName: props.userData.name,
    profileEmail: props.userData.email
  });
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = React.useState(true);
  const [isButtonHidden, setIsButtonHidden] = React.useState(true);

  const isSubmitButtonHidden = isButtonHidden ? 'submit-button_hidden' : '';
  const isEditButtonHidden = isButtonHidden ? '' : 'profile__button_hidden';
  const isLinkHidden = isButtonHidden ? '' : 'profile__link_hidden';

  React.useEffect(() => {
    if (data.profileName === props.userData.name && data.profileEmail === props.userData.email) {
      setIsSubmitButtonDisabled(true);
    } else {
      setIsSubmitButtonDisabled(false);
    }
  }, [data]);

  function signOut() {
    localStorage.removeItem('jwt');
    navigate('/');
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(data.profileEmail, data.profileName);
    setIsDisabled(true);
    setIsButtonHidden(true);
  }

  function handleEditButtonClick(e) {
    e.preventDefault();
    setIsDisabled(false);
    setIsButtonHidden(false);
  }

  return (
    <section className='profile page__profile section content__section'>
      <div className='profile__wrapper'>
        <h2 className='profile__title'>{`Привет, ${props.userData.name}!`}</h2>
        <form onSubmit={handleSubmit} className='profile__form'>
          <div className='profile__input-wrapper'>
            <label className='profile__label' htmlFor='profileName'>Имя</label>
            <input
              id='profileName'
              type='text'
              name='profileName'
              className='profile__input'
              placeholder='Имя'
              minLength='2'
              maxLength='20'
              pattern='^[a-zA-Zа-яА-Я\s*\-]+$'
              required
              disabled={isDisabled}
              aria-label='profileName'
              value={data.profileName}
              onChange={handleChange}
            />
            <span id='profileName-error' className='profile__error'>
              { errors.profileName ? errors.profileName : null }
            </span>
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
              disabled={isDisabled}
              aria-label='profileEmail'
              value={data.profileEmail}
              onChange={handleChange}
            />
            <span id='profileEmail-error' className='profile__error'>
              { errors.profileEmail ? errors.profileEmail : null }
            </span>
          </div>
          <button className={`profile__button button ${isEditButtonHidden}`} onClick={handleEditButtonClick}>Редактировать</button>
          <NavLink onClick={signOut} to='/signin' className={`profile__link link ${isLinkHidden}`}>Выйти из аккаунта</NavLink>
          <button type='submit' disabled={!isValid || isSubmitButtonDisabled} className={`submit-button button ${isSubmitButtonHidden}`}>Сохранить</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
