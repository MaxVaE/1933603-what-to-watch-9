import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { selectedFilm, video } from './mocks/films';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        selectedFilm={selectedFilm}
        video={video}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
