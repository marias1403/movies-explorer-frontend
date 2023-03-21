import React from 'react';
import promoImage from '../../images/promo_image.svg';

function Promo() {
  return (
    <section className='promo page__promo section content__section'>
      <div className='promo__wrapper'>
        <h1 className='promo__title-desktop'>Учебный проект студента <br/> факультета Веб-разработки.</h1>
        <h1 className='promo__title-mobile'>Учебный проект <br/> студента факультета <br/> Веб-разработки.</h1>
        {/*<img className='promo__image' src={promoImage} alt='Минималистичный паттерн'/>*/}
      </div>
    </section>
  );
}

export default Promo;
