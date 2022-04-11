import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setAutoPlay(true)}
      onMouseOut={() => setAutoPlay(false)}
      onClick={() => navigate(getPathToMoviePage())}
    >
      <Video
        className="small-film-card__image"
        videoSrc={film.previewVideoLink}
        poster={film.previewImage}
        isAutoPlaying={autoPlay}
        muted
      />
      <h3 className="small-film-card__title">
        <Link
          to={getPathToMoviePage()}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );

  function getPathToMoviePage() {
    return AppRoute.Film.replace(':id', film.id.toString());
  }
}
