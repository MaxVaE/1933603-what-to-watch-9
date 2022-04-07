import { Link } from 'react-router-dom';

import Header from '../header/header';
import { AppRoute } from '../../const';

export default function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <Header
        title='Page Not Found'
        pageHeaderType="user-page__head"
      >
      </Header>

      <section className="catalog">
        <Link
          className="logo__link"
          to={AppRoute.Root}
          style={
            {
              width: '120px',
              margin: '0 auto 24px',
            }
          }
        >
        Go to main
        </Link>
      </section>
    </div>
  );
}
