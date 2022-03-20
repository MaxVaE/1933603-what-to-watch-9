import Header from '../header/header';
import { AuthorizationStatus } from '../../const';
import FilmsList from '../films-list/films-list';
import { useAppSelector } from '../../hooks';

export default function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.baseFilms);
  const myFilms = films.filter((film, index) => index < 6);

  return (
    <div className="user-page">
      <Header
        authorizationStatus={AuthorizationStatus.Auth}
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
