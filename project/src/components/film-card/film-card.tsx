import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film,
  activateFilm: (id: string) => void,
}

export default function FilmCard({
  film,
  activateFilm,
}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => activateFilm(film.id)}
    >
      <div className="small-film-card__image">
        <img src={film.srcImg} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={AppRoute.Film}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
