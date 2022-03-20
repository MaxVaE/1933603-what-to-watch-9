import { createReducer } from '@reduxjs/toolkit';
import { films } from './../mocks/films';
import { changeGenre, filterFilmsSelectedGenre } from './action';

const genres = new Set(['All genres']);

films.forEach((film) => genres.add(film.genre));

const initialState = {
  baseFilms: films,
  films: films,
  genres: [...genres],
  selectedGenre: 'All genres',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, value) => {
      state.selectedGenre = value.payload;
    })
    .addCase(filterFilmsSelectedGenre, (state) => {
      state.films = state.baseFilms;

      if (state.selectedGenre !== 'All genres') {
        state.films = state.films.filter((film) => state.selectedGenre === film.genre);
      }
    });
});

export {reducer};
