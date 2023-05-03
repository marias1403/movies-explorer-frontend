import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from  '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NavTab from '../NavTab/NavTab';
import Preloader from '../Preloader/Preloader';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState(null);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isInfoTooltipPopupSuccess, setIsInfoTooltipPopupSuccess] = useState(true);
  const [isInfoTooltipPopupSuccessText, setIsInfoTooltipPopupSuccessText] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [serverProblem, setServerProblem] = useState(false);
  const [searchParams, setSearchParams] = useState({
    request: '',
    isShortMovie: false,
    result: [],
  });
  const [numberToMap, setNumberToMap] = useState(12);
  const [moreNumberToMap, setMoreNumberToMap] = useState(3);

  const handleWindowResize = () => {
    if (window.innerWidth >= 1280) {
      setNumberToMap(12);
      setMoreNumberToMap(3);
    } else if (window.innerWidth <= 1279 && window.innerWidth > 767) {
      setNumberToMap(8);
      setMoreNumberToMap(2);
    } else if (window.innerWidth <= 767) {
      setNumberToMap(5);
      setMoreNumberToMap(2);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserData(jwt)
        .then((userData) => {
          if (userData) {
            setIsLoggedIn(true);
            navigate('/movies');
            setUserData(userData);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((err) => {
          setServerProblem(true);
          console.log(err);
        })
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi.getUserData(jwt)
        .then(res => res.data)
        .then(user => setCurrentUser(user))
        .catch((err) => {
          setServerProblem(true);
          console.log(err)
        })
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      moviesApi.getMovies()
        .then((res) => {
          setMovies(mapApiMoviesToState(res))
        })
        .catch((err) => {
          setServerProblem(true);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getSavedMovies()
        .then((res) => {
          const savedMovies = mapSavedMoviesToState(res);
          setSavedMovies(savedMovies);
          setFilteredSavedMovies(savedMovies);
        })
        .catch((err) => {
          setServerProblem(true);
          console.log(err);
        })
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const searchParamsString = localStorage.getItem('searchParams');
    const searchParamsObj = JSON.parse(searchParamsString);
    if (searchParamsObj) {
      setSearchParams(searchParamsObj);
    }
  }, []);

  function saveSearchParams(obj) {
    const searchParamsString = JSON.stringify(obj);
    localStorage.setItem('searchParams', searchParamsString);
  }

  function handleAuthResult(isSuccess) {
    setIsInfoTooltipPopupSuccess(isSuccess);
    setIsInfoTooltipPopupSuccessText('Вы успешно зарегистрировались!');
    setIsInfoTooltipPopupOpen(true);
  }

  function handleEditProfileResult(isSuccess) {
    setIsInfoTooltipPopupSuccess(isSuccess);
    setIsInfoTooltipPopupSuccessText('Профиль успешно отредактирован');
    setIsInfoTooltipPopupOpen(true);
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }

  function handleGetUserData(token) {
    setIsLoggedIn(true);
    mainApi.getUserData(token)
      .then((userData) => {
        setUserData(userData);
      })
  }

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then((res) => {
        if(res) {
          handleAuthResult(true);
          navigate('/signin');
        } else {
          handleAuthResult(false);
        }
      })
      .catch((err) => {
        setServerProblem(true);
        console.log(err);
        handleAuthResult(false);
      })
  }

  function handleLogin(email, password) {
    if (!email || !password) {
      return;
    }
    mainApi.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          handleGetUserData(res.token);
          navigate('/movies');
        } else {
          handleAuthResult(false);
        }
      })
      .catch((err) => {
        setServerProblem(true);
        console.log(err);
        handleAuthResult(false);
      });
  }

  function handleUpdateUser(email, name) {
    mainApi.updateUserProfile(email, name)
      .then((user) => {
        if (user) {
          handleEditProfileResult(true);
          setCurrentUser(user);
        } else {
          handleEditProfileResult(false);
        }
      })
      .catch((err) => {
        setServerProblem(true);
        console.log(err);
      });
  }

  function handleMovieAdd(movie) {
    const isAlreadySaved = savedMovies.some(i => i.id === movie.id);
    if (!isAlreadySaved) {
      mainApi.addMovie(movie)
        .then(() => {
          mainApi.getSavedMovies()
            .then((res) => {
              const savedMovies = mapSavedMoviesToState(res);
              setFilteredSavedMovies(savedMovies);
              setSavedMovies(savedMovies);
            });
        })
        .catch((err) => {
          setServerProblem(true);
          console.log(err);
        })
    }
  }

  function handleMovieDelete(movieId) {
    mainApi.deleteMovie(movieId)
      .then(() => {
        mainApi.getSavedMovies()
          .then((res) => {
            const savedMovies = mapSavedMoviesToState(res);
            setFilteredSavedMovies(savedMovies);
            setSavedMovies(savedMovies);
          })
      })
      .catch((err) => {
        setServerProblem(true);
        console.log(err);
      })
  }

  function mapApiMoviesToState(movies) {
    let res = [];

    for (let movie of movies) {
      res.push({
        id: movie.id,
        movieId: movie.id,
        country: movie.country,
        director: movie.director,
        year: movie.year,
        description: movie.description,
        duration: movie.duration,
        nameEN: movie.nameEN,
        nameRU: movie.nameRU,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailer: movie.trailerLink,
      });
    }
    return res;
  }

  function mapSavedMoviesToState(movies) {
    let res = [];

    for (let movie of movies) {
      res.push({
        id: movie._id,
        movieId: movie.movieId,
        country: movie.country,
        director: movie.director,
        year: movie.year,
        description: movie.description,
        nameEN: movie.nameEN,
        duration: movie.duration,
        nameRU: movie.nameRU,
        thumbnail: movie.thumbnail,
        image: movie.image,
        trailer: movie.trailer,
        owner: {
          id: movie.owner._id,
        }
      });
    }
    return res;
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      {
        isLoggedIn === null
          ? <div className='preloader'><Preloader /></div>
          : <div className='page'>
            <div className='page__container'>
              <Routes>
                <Route
                  path='/signup'
                  element={<Register
                    onRegister={handleRegister}
                  />}
                />
                <Route
                  path='/signin'
                  element={<Login
                    onLogin={handleLogin}
                  />}
                />
                <Route
                  exact path='/'
                  element={
                    <>
                      <Header
                        loggedIn={isLoggedIn}
                      />
                      <Main/>
                      <Footer/>
                    </>
                  }
                />
                <Route
                  path='/profile'
                  element={
                    <ProtectedRoute
                      loggedIn={isLoggedIn}
                    >
                      <Header
                        loggedIn={isLoggedIn}
                      />
                      <Profile
                        onUpdateUser={handleUpdateUser}
                        userData={userData}
                      />
                    </ProtectedRoute>}

                />
                <Route
                  exact path='/movies'
                  element={
                    <ProtectedRoute
                      loggedIn={isLoggedIn}
                    >
                      <Header
                        loggedIn={isLoggedIn}
                      />
                      <Movies
                        type={'main'}
                        movies={filteredMovies}
                        setMovies={setFilteredMovies}
                        searchMovies={movies}
                        savedMovies={savedMovies}
                        onAddMovie={handleMovieAdd}
                        onDeleteMovie={handleMovieDelete}
                        onServerProblem={serverProblem}
                        onSaveSearchParams={saveSearchParams}
                        searchParams={searchParams}
                        numberToMap={numberToMap}
                        onSetNumberToMap={setNumberToMap}
                        moreNumberToMap={moreNumberToMap}
                      />
                      <Footer/>
                    </ProtectedRoute>}
                />
                <Route
                  exact path='/saved-movies'
                  element={
                    <ProtectedRoute
                      loggedIn={isLoggedIn}
                    >
                      <Header
                        loggedIn={isLoggedIn}
                      />
                      <Movies
                        type={'saved'}
                        movies={filteredSavedMovies}
                        setMovies={setFilteredSavedMovies}
                        searchMovies={savedMovies}
                        savedMovies={savedMovies}
                        onAddMovie={handleMovieAdd}
                        onDeleteMovie={handleMovieDelete}
                        onServerProblem={serverProblem}
                        onSaveSearchParams={saveSearchParams}
                        searchParams={searchParams}
                        numberToMap={numberToMap}
                        onSetNumberToMap={setNumberToMap}
                        moreNumberToMap={moreNumberToMap}
                      />
                      <Footer/>
                    </ProtectedRoute>}
                />
              </Routes>
              <Error/>
              <InfoTooltip
                isOpen={isInfoTooltipPopupOpen}
                onClose={closeAllPopups}
                isSuccess={isInfoTooltipPopupSuccess}
                successText={isInfoTooltipPopupSuccessText}
                failText={'Что-то пошло не так! Попробуйте ещё раз.'}
              />
              <NavTab/>
            </div>
          </div>
      }
    </CurrentUserContext.Provider>
  );
}

export default App;
