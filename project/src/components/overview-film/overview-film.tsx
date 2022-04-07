import { Fragment } from 'react';

import { Film } from '../../types/films';

type OverviewFilmProps = {
  film: Film;
}

function OverviewFilm({
  film,
}: OverviewFilmProps): JSX.Element {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getfilmLevel()}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </Fragment>
  );

  function getfilmLevel() {
    if (film.rating <= 3) {
      return 'Bad';
    }
    else if (film.rating <= 5) {
      return 'Normal';
    }
    else if (film.rating <= 8) {
      return 'Good';
    }
    else if (film.rating <= 10) {
      return 'Very good';
    }

    return 'Awesome';
  }
}

export default OverviewFilm;
