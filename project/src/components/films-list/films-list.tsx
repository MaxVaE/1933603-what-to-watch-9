import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films;
}

export default function FilmsList({
  films,
}: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
          />
        ))
      }
    </div>
  );
}
