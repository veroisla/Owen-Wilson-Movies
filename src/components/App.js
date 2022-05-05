import React from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';

//--> RUTAS EXTERNAS
import { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';

//--> RUTAS INTERNAS
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [dataMovie, setDataMovie] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByYear, setFilterByYear] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovie(dataFromApi);
    });
  }, []);

  //PREVENIR ENVÍO PRO DEFECTO DE FORM
  const PreventSubmitForm = (ev) => {
    ev.prevent.default();
  };

  const handleFilterByName = (value) => {
    setFilterByName(value);
  };

  const handleFilterByYear = (value) => {
    setFilterByYear(value);
    console.log('holis');
  };

  const movieFilter = dataMovie.filter((name) => {
    return name.movie.toLowerCase().includes(filterByName.toLowerCase());
  });

  return (
    <div>
      <h1>Owen Wilson's "wow"</h1>
      <Filters
        PreventSubmitForm={PreventSubmitForm}
        handleFilterByName={handleFilterByName}
        handleFilterByYear={handleFilterByYear}
      />
      <MovieSceneList dataMovie={movieFilter} />
    </div>
  );
}

export default App;

// PreventSubmitForm={PreventSubmitForm} -> Prevenir envío form
// handlefilterByName={handlefilterByName} -> Función que recoge el valor del input

// //const movieFilter = dataMovie.filter((name) => {
//   return name.movie.toLowerCase().includes(filterByName.toLowerCase());
// }); // haz un filtro de dataMovie, retorname de cada elemento, de la propiedad movie, aquellas que coincidan con filterByName (contiene el valor del input del usuario)
