import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/films';
import { Genres } from '../types/genre';
import { changeGenre, filterFilmsSelectedGenre, loadFilms, requireAuthorization, setError } from './action';

const ALL_GENRES = 'All genres';

type InitialState = {
  baseFilms: Films;
  filteredFilmsByGenre: Films;
  genres: Genres;
  selectedGenre: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  error: string;
}

const initialState: InitialState = {
  baseFilms: [],
  filteredFilmsByGenre: [],
  genres: [],
  selectedGenre: ALL_GENRES,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, value) => {
      state.selectedGenre = value.payload;
    })
    .addCase(filterFilmsSelectedGenre, (state) => {
      state.filteredFilmsByGenre = state.baseFilms;

      if (state.selectedGenre !== ALL_GENRES) {
        state.filteredFilmsByGenre = state.filteredFilmsByGenre.filter((film) => state.selectedGenre === film.genre);
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.baseFilms = action.payload;
      state.filteredFilmsByGenre = state.baseFilms;

      const genres = new Set([ALL_GENRES]);
      state.baseFilms.forEach((film) => genres.add(film.genre));

      state.genres = [...genres];

      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
