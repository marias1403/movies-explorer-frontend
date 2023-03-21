import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NavTab from '../NavTab/NavTab';

function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <Routes>
          <Route
            path='/signup'
            element={ <Register /> }
          />
          <Route
            path='/signin'
            element={ <Login /> }
          />
          <Route
            path='/'
            element={
            <React.Fragment className='fragment'>
              <Header />
              <Main />
              <Footer />
            </React.Fragment> }
          />
          <Route
            path='/profile'
            element={
            <React.Fragment className='fragment'>
              <Header />
              <Profile />
            </React.Fragment>
          }
          />
          <Route
            path='/movies'
            element={
              <React.Fragment className='fragment'>
                <Header />
                <Movies />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <React.Fragment className='fragment'>
                <Header />
                <SavedMovies />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
        <InfoTooltip />
        <NavTab />
      </div>
    </div>
  );
}

export default App;
