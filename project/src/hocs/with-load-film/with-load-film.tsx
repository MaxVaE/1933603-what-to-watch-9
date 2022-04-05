import { useNavigate, useParams } from 'react-router-dom';
import { ComponentType, useEffect, useState } from 'react';

import { api } from '../../store';
import { APIRoute } from '../../const';
import { Film } from '../../types/films';

type HOCProps = {
  film: Film;
  filmId: number;
}

function withLoadFilm<T>(Component: ComponentType<T>)
: ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithLoadFilm(props: ComponentProps): JSX.Element {
    const filmId = Number(useParams().id);
    const [film, setFilm] = useState<Film>();

    const navigate = useNavigate();

    useEffect(() => {
      async function loadFilm() {
        api.get<Film>(`${APIRoute.Films}/${filmId}`)
          .then(({ data }) => {
            setFilm(data);
          })
          .catch(() => {
            navigate('/not-found');
          });
      }

      loadFilm();
    }, [filmId, navigate]);

    return (
      <Component
        film={film}
        filmId={filmId}
        {...props as T}
      />
    );
  }

  return WithLoadFilm;
}

export default withLoadFilm;
