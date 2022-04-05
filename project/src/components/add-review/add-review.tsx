import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Header from '../header/header';
import { APIRoute } from '../../const';
import { Film } from '../../types/films';
import { api } from './../../store/index';
import { onReviewProps } from '../../types/add-review';
import { errorHandle } from '../../services/error-handle';
import FormAddReview from '../form-add-review/form-add-review';

type AddReviewProps = {
  film: Film;
  filmId: number;
}

export default function AddReview({
  film,
  filmId,
}: AddReviewProps): JSX.Element {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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
