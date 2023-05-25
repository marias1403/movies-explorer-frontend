import React from 'react';
import avatar from '../../images/portfolio-avatar.png';

function AboutMe() {
  return (
    <section className='about-me page__about-me section content__section'>
      <h2 className='section__title'>Студент</h2>
      <div className='about-me__wrapper'>
        <div className='about-me__description-wrapper'>
          <h3 className='about-me__name'>Мария Архипова</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 26 лет</p>
          <p className='about-me__description'>Закончила бакалавриат в РЭУ им. Г. В. Плеханова по направлению «Логистика» в г. Москве в 2020 году.  С 2019 года работала графическим дизайнером, в 2022 году решила развиваться дальше и получить знания по веб-разработке. Сейчас нахожусь в поисках работы, делаю пет-проекты, участвую в хакатонах и изучаю алгоритмы.</p>
          <a className='about-me__link link' href='https://github.com/marias1403' target='_blank' rel='noopener noreferrer'>Github</a>
        </div>
        <img className='about-me__avatar' src={avatar} alt='Фото студента'/>
      </div>
    </section>
  );
}

export default AboutMe;
