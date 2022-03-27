import { Genre } from './genre';

export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: Genre;
  released: number;
  isFavorite: boolean;
};

export type SelectedFilm = {
  title: string;
  genre: Genre;
  year: number;
  srcPoster: string;
};

export type Films = Film[];
