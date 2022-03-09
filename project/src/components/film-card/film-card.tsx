import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';
import Video from '../video/video';

type FilmCardProps = {
  film: Film,
  activateFilm: (id: string) => void,
}

export default function FilmCard({
  film,
  activateFilm,
}: FilmCardProps): JSX.Element {
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        setAutoPlay(true);
        return activateFilm(film.id);
      }}
      onMouseOut={() => setAutoPlay(false)}
    >
      <div className="small-film-card__image">
        <Video
          videoSrc={film.videoSrc}
          poster={film.imgSrc}
          isPlaying={autoPlay}
          muted
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={AppRoute.Film.replace(':id', film.id)}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
