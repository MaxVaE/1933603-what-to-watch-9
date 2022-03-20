import { useParams, Link, useLocation } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { onReviewProps } from '../../types/add-review';
import FormAddReview from '../form-add-review/form-add-review';
import Header from '../header/header';


export default function AddReview(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const filmId = Number(useParams().id);
  const film = films.find((filmElem) => filmElem.id === filmId);
  const location = useLocation();

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>


        <Header
          authorizationStatus={AuthorizationStatus.Auth}

        >
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={location.pathname.replace('/review', '')} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
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

      <FormAddReview onReview={(data: onReviewProps) => {
        throw new Error('Not work');
      }}
      />

    </section>
  );
}
