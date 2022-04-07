import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';
import { isCheckedAuth } from '../../films';
import { useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

type HeaderProps = {
  title?: string;
  pageHeaderType?: string;
  children: ReactNode;
}

export default function Header({
  title,
  pageHeaderType,
  children,
}: HeaderProps): JSX.Element {
  const {
    authorizationStatus,
  } = useAppSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className={`page-header ${pageHeaderType}`}>
      <Logo />

      { title && (
        <h1 className="page-title user-page__title">{title}</h1>
      )}

      {children}

      {
        isCheckedAuth(authorizationStatus)
          ? (
            <ul className="user-block">
              <li
                onClick={() => navigate(AppRoute.MyList)}
                className="user-block__item"
              >
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
                className="user-block__item"
              >
                <Link
                  to={AppRoute.SignIn}
                  className="user-block__link"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          )
          : (
            <div className="user-block">
              <Link
                to={AppRoute.SignIn}
                className="user-block__link"
              >
                Sign in
              </Link>
            </div>
          )
      }
    </header>
  );
}
