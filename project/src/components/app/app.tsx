import { Route, BrowserRouter, Routes } from 'react-router-dom';
import WelcomeMain from '../welcome-main/welcome-main';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFound404 from '../NotFound404/NotFound404';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  geners: string[],
  films: Array<{
    name: string,
    srcImg: string,
  }>,
  selectedFilm: {
    title: string,
    gener: string,
    year: number,
    srcPoster: string,
  },
};

function App({
  geners,
  films,
  selectedFilm,
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={(
            <WelcomeMain
              geners={geners}
              films={films}
              selectedFilm={selectedFilm}
            />
          )}
        />
        <Route
          path={AppRoute.MyList}
          element={(
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          )}
        />
        <Route
          path={AppRoute.SignIn}
          element={(
            <SignIn />
          )}
        />
        <Route
          path="*"
          element={<NotFound404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
