import { api } from '../../store';
import { Film } from '../../types/films';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../films';

type ButtonMyListProps = {
  film: Film;
}

function ButtonMyList({
  film,
}: ButtonMyListProps): JSX.Element {
  const {
    authorizationStatus,
  } = useAppSelector((state) => state);

  const {
    id,
    isFavorite,
  } = film;

  const [status, setStatus] = useState(isFavorite);

  if (!isCheckedAuth(authorizationStatus)) {
    return <div />;
  }

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => addFavorite()}
    >
      {
        status
          ? (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
          )
          : (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
          )
      }
      <span>My list</span>
    </button>
  );

  function addFavorite() {
    api.post(`/favorite/${id}/${Number(!status)}`)
      .then(() => {
        setStatus(!status);
      });
  }
}

export default ButtonMyList;
