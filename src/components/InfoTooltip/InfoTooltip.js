import React from 'react';
import successImage from '../../images/success_image.svg';
import failImage from '../../images/fail_image.svg';

function InfoTooltip(props) {
  const isOpen = props.isOpen ? 'popup_opened' : '';
  const img = props.isSuccess ? successImage : failImage;

  return (
    <div onMouseDown={ (e) => {
      if (e.target === e.currentTarget) {
        props.onClose()
      }
    }} className={`popup ${isOpen}`}>
      <div className='popup__container'>
        <img className="popup__image" src={img} alt={props.isSuccess ? props.successText : props.failText}/>
        <h2 className='popup__text'>
          {
            props.isSuccess
              ? props.successText
              : props.failText
          }
        </h2>
        <button onMouseDown={props.onClose} className='popup__button button'>Закрыть</button>
      </div>
    </div>
  );
}

export default InfoTooltip;
