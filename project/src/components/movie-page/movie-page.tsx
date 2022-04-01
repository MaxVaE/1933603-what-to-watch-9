import Footer from '../footer/footer';
import Header from '../header/header';
import FilmsList from '../films-list/films-list';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Tabs from '../tabs/tabs';
import { useEffect, useState } from 'react';
import { api } from '../../store';
import { APIRoute } from '../../const';
import { Film, Films } from '../../types/films';
import { isCheckedAuth } from '../../films';

export default function MoviePage(): JSX.Element {
  const {
    authorizationStatus,
  } = useAppSelector((state) => state);
  const filmId = Number(useParams().id);

  const [film, setFilm] = useState<Film>();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilm() {
      try {
        const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);

        setFilm(data);
      } catch (error) {
        navigate('/not-found');
      }
    }

    loadFilm();
  }, [filmId, navigate]);

  const location = useLocation();

  const [similarFilms, setSimilarFilms] = useState<Films>([]);

  useEffect(() => {
    async function loadSimilarFilms() {
      const { data } = await api.get<Films>(`${APIRoute.Films}/${filmId}/similar`);
      setSimilarFilms(data);
    }

    loadSimilarFilms();
  }, [filmId]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            pageHeaderType="film-card__head"
          >
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
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

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </>
  );
}
