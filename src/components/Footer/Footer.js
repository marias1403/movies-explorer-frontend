import React from 'react';

function Footer() {
  return (
    <footer className='footer page__footer section'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__caption footer__caption_year-mobile'>&#169; 2023</p>
        <div className='footer__caption-wrapper'>
          <p className='footer__caption'>Яндекс.Практикум</p>
          <p className='footer__caption'>Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
