import React from 'react';

function AboutProject() {
  return (
    <section className='about-project page__about-project section content__section'>
      <h2 className='section__title'>О проекте</h2>
      <div className='about-project__text-wrapper'>
        <div className='about-project__text-container'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__period-wrapper'>
        <span className='about-project__period'>1 неделя</span>
        <span className='about-project__period about-project__period_grey'>4 недели</span>
        <p className='about-project__period-text'>Back-end</p>
        <p className='about-project__period-text'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
