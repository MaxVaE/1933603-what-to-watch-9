import Header from '../header/header';
import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks';

export default function MyList(): JSX.Element {
  const {
    authorizationStatus,
    baseFilms: films,
  } = useAppSelector((state) => state);
  const myFilms = films.filter((film, index) => index < 6);

  return (
    <div className="user-page">
      <Header
        authorizationStatus={authorizationStatus}
        title="My list"
        pageHeaderType="user-page__head"
      >
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={myFilms} />
      </section>
    </div>
  );
}
