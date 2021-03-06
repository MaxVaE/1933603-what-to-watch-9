import Footer from '../footer/footer';
import Header from '../header/header';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import ButtonMore from '../button-more/button-more';

import { Film } from '../../types/films';
import { useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import { api } from './../../store/index';
import VideoPlayer from '../video-player/video-player';
import ButtonMyList from '../button-my-list/button-my-list';

const DEFAULT_COUNT_FILMS = 8;
const MAX_GENRES_COUNT = 10;

export default function WelcomeMain(): JSX.Element {
  const {
    filteredFilmsByGenre: films,
    genres,
  } = useAppSelector((state) => state);

  const [countFilms, setCountFilms] = useState(DEFAULT_COUNT_FILMS);
  const [promo, setPropmo] = useState<Film>(films[0]);

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    function loadPromo() {
      api.get<Film>('/promo')
        .then(({ data }) => setPropmo(data));
    }

    loadPromo();
  }, []);

  return (
    <>
      <section
        className="film-card"
        style={{background: promo.backgroundColor}}
      >
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          pageHeaderType="film-card__head"
        >
        </Header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={promo.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => setShowPlayer(true)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <ButtonMyList
                  film={promo}
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {
        showPlayer
          ? (
            <VideoPlayer
              film={promo}
              onClose={() => setShowPlayer(false)}
            />
          )
          : (
            <div className="page-content">
              <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <GenresList
                  genres={genres.slice(0, MAX_GENRES_COUNT)}
                  updateCountFilmList={() => setCountFilms(DEFAULT_COUNT_FILMS)}
                />

                <FilmsList
                  films={films.slice(0, countFilms)}
                />

                { films.length > countFilms && (
                  <ButtonMore
                    onClick={() => setCountFilms(countFilms + DEFAULT_COUNT_FILMS)}
                  />
                )}
              </section>

              <Footer />
            </div>
          )
      }
    </>
  );
}
