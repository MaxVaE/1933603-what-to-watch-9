import Header from '../header/header';
import FilmsList from '../films-list/films-list';
import { Films } from '../../types/films';
import { useState, useEffect } from 'react';
import { api } from './../../store/index';

export default function MyList(): JSX.Element {
  const [favoriteFilms, setFavoriteFilms] = useState<Films>([]);

  useEffect(() => {
    function loadFavoriteFilms() {
      api.get<Films>('/favorite')
        .then(({ data }) => {
          setFavoriteFilms(data);
        });
    }

    loadFavoriteFilms();
  }, []);

  return (
    <div className="user-page">
      <Header
        title="My list"
        pageHeaderType="user-page__head"
      >
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>
    </div>
  );
}
