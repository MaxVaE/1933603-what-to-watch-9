import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films, geners, selectedFilm, video } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      geners={geners}
      films={films}
      selectedFilm={selectedFilm}
      video={video}
    />
  </React.StrictMode>,
  document.getElementById('root'));
