import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';
import Video from '../video/video';

type FilmCardProps = {
  film: Film;
}

export default function FilmCard({
  film,
}: FilmCardProps): JSX.Element {
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setAutoPlay(true)}
      onMouseOut={() => setAutoPlay(false)}
    >
      <div className="small-film-card__image">
        <Video
          videoSrc={film.previewVideoLink}
          poster={film.previewImage}
          isAutoPlaying={autoPlay}
          muted
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={AppRoute.Film.replace(':id', film.id.toString())}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
