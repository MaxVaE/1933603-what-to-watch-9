import Header from '../header/header';
import { AuthorizationStatus } from '../../const';
import FilmsList from '../films-list/films-list';
import { Films } from '../../types/films';

type MyListProps = {
  myFilms: Films,
}

export default function MyList({
  myFilms,
}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header
        authorizationStatus={AuthorizationStatus.Auth}
        title="My list"
        isTypeUserPage
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={myFilms} />
      </section>
    </div>
  );
}
