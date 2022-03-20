import { Film, Films, SelectedFilm } from '../types/films';
import { genres, images, names, starring } from './const';

export const films: Films = generator();

export const selectedFilm: SelectedFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  srcPoster: 'img/the-grand-budapest-hotel-poster.jpg',
};

export const video = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

function generator() {
  const generateFilms: Films = [];

  for (let i = 0; i < 20; i++) {
    const film: Film = {
      id: i + 1,
      name: names[i],
      posterImage: images[i],
      previewImage: images[i],
      backgroundImage: images[i],
      backgroundColor: '#ffffff',
      rating: generatorRandomNumber(50, 100) / 10,
      scoresCount: generatorRandomNumber(100, 300),
      director: 'Wes Anderson',
      starring: generatorRandomStarring(),
      runTime: generatorRandomNumber(45, 180),
      genre: genres[generatorRandomNumber(0, 5)],
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
      isFavorite: false,
      released: generatorRandomNumber(1990, 2021),
    };

    generateFilms.push(film);
  }

  return generateFilms;
}

function generatorRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatorRandomStarring() {
  const generatorStarring: string[] = [];

  for (let i = 0; i < 5; i++) {
    const newStarrting = starring[generatorRandomNumber(0, starring.length)];
    generatorStarring.push(newStarrting);
  }
  const set = new Set(generatorStarring);
  const newStarring: string[] = [...set];

  return newStarring;
}
