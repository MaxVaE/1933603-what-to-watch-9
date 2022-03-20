import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { ReactNode } from 'react';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
  title?: string;
  pageHeaderType?: string;
  children: ReactNode;
}

export default function Header({
  authorizationStatus,
  title,
  pageHeaderType,
  children,
}: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${pageHeaderType}`}>
      <Logo />

      {children}

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
