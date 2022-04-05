import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { onReviewProps } from '../../types/add-review';
import { Film } from '../../types/films';
import FormAddReview from '../form-add-review/form-add-review';
import Header from '../header/header';
import { api } from './../../store/index';


export default function AddReview(): JSX.Element {
  const filmId = Number(useParams().id);
  const location = useLocation();

  const [film, setFilm] = useState<Film>();

  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={getFilmPath()} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <FormAddReview
        onReview={onReview}
        isLoading={isLoading}
      />
    </section>
  );

  async function onReview(data: onReviewProps) {
    setIsLoading(true);

    try {
      await api.post(
        `${APIRoute.Comments}/${filmId}`,
        data,
      );

      navigate(getFilmPath());
    } catch (error) {
      errorHandle(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getFilmPath() {
    return location.pathname.replace('/review', '');
  }
}
