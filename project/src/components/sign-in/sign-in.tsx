import Footer from '../footer/footer';
import Logo from '../logo/logo';
import { FormEvent, useRef, useEffect } from 'react';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { isCheckedAuth } from '../../films';
import { useAppSelector } from '../../hooks';

export default function SignIn(): JSX.Element {
  const {
    authorizationStatus,
  } = useAppSelector((state) => state);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCheckedAuth(authorizationStatus)) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
            </div>

            <div className="sign-in__field">
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
            </div>
          </div>

          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();


    if (emailRef.current !== null && passwordRef.current !== null) {
      const isValidEmail = emailRef.current.value.search(/^.*@[a-z]*\.[a-z]*$/);

      if (isValidEmail !== -1) {
        onSubmit({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });

        navigate(AppRoute.Root);
      }
    }
  }

  function onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  }
}
