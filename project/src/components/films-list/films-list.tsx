import { useState } from 'react';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films;
}

export default function FilmsList({
  films,
}: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState(0);

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            activateFilm={setActiveFilmId}
          />
        ))
      }
      {/* Удалить строчку ниже, когда будет добавлен показ фильма при наведении */}
      {activeFilmId}
    </div>
  );
}
