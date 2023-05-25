import React from 'react';

function Techs() {
  return (
    <section className='techs page__techs section content__section'>
      <div className='techs__wrapper'>
        <h2 className='section__title'>Технологии</h2>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__techs-wrapper'>
          <span className='techs__techs'>HTML</span>
          <span className='techs__techs'>CSS</span>
          <span className='techs__techs'>JS</span>
          <span className='techs__techs'>React</span>
          <span className='techs__techs'>Git</span>
          <span className='techs__techs'>Express.js</span>
          <span className='techs__techs'>mongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Techs;
