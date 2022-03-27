import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/films';

export const changeGenre = createAction('film/getFilms', (value: string) => ({
  payload: value,
}));

export const filterFilmsSelectedGenre = createAction('film/findFilmsSelectedGenre');

export const loadFilms = createAction<Films>('film/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('film/setError');
