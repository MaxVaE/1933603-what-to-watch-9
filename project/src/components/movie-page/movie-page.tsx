import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Tabs from '../tabs/tabs';
import { api } from '../../store';
import Footer from '../footer/footer';
import Header from '../header/header';
import { APIRoute } from '../../const';
import { isCheckedAuth } from '../../films';
import { useAppSelector } from '../../hooks';
import { Film, Films } from '../../types/films';
import FilmsList from '../films-list/films-list';
import VideoPlayer from '../video-player/video-player';

type MoviePageProps = {
  film: Film;
  filmId: number;
}

export default function MoviePage({
  film,
  filmId,
}: MoviePageProps): JSX.Element {
  const {
    authorizationStatus,
  } = useAppSelector((state) => state);

  const location = useLocation();

  const [similarFilms, setSimilarFilms] = useState<Films>([]);

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    async function loadSimilarFilms() {
      const { data } = await api.get<Films>(`${APIRoute.Films}/${filmId}/similar`);
      setSimilarFilms(data);
    }

    loadSimilarFilms();
  }, [filmId]);

  return (
    <>
      <section
        className="film-card film-card--full"
        style={{background: film.backgroundColor}}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            pageHeaderType="film-card__head"
          >
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  isCheckedAuth(authorizationStatus) && (
                    <Link
                      to={`${location.pathname}/review`}
                      className="btn film-card__button"
                    >
                      Add review
                    </Link>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            {
              film &&
             <Tabs
               film={film}
             />
            }
          </div>
        </div>
      </section>

      {
        showPlayer
          ? (
            <VideoPlayer
              film={film}
              onClose={() => setShowPlayer(false)}
            />
          )
          : (
            <div className="page-content">
              <section className="catalog catalog--like-this">
                <h2 className="catalog__title">More like this</h2>

                <FilmsList films={similarFilms.slice(0, 4)} />
              </section>

              <Footer />
            </div>
          )
      }
    </>
  );
}
