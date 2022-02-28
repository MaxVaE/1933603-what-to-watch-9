import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus,
  title?: string,
  isTypeUserPage?: boolean,
}

export default function Header({
  authorizationStatus,
  title,
  isTypeUserPage,
}: HeaderProps): JSX.Element {
  const userHeadType: string = isTypeUserPage ? 'user-page__head' : 'film-card__head';
  return (
    <header className={`page-header ${userHeadType}`}>
      <Logo />

      { title && (
        <h1 className="page-title user-page__title">{title}</h1>
      )}

      {
        authorizationStatus === AuthorizationStatus.Auth
          ? (
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
              </li>
            </ul>
          )
          : (
            <div className="user-block">
              <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
            </div>
          )
      }
    </header>
  );
}
