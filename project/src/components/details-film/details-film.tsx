import { Fragment } from 'react';
import { Film } from '../../types/films';

type DetailsFilmProps = {
  film: Film;
}

function DetailsFilm({
  film,
}: DetailsFilmProps) {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((actor, index) => (
              <Fragment key={actor}>
                {actor}
                {
                  index === film.starring.length - 1
                    ? ''
                    : ','
                }
                <br/>
              </Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{parsRunTime()}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );

  function parsRunTime() {
    return `${Math.trunc(film.runTime / 60)}h ${film.runTime % 60}m`;
  }
}

export default DetailsFilm;
