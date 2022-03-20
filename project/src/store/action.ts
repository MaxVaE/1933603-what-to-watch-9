import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('film/getFilms', (value: string) => ({
  payload: value,
}));

export const filterFilmsSelectedGenre = createAction('film/findFilmsSelectedGenre');

