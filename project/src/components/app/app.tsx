import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { SelectedFilm } from '../../types/films';

import WelcomeMain from '../welcome-main/welcome-main';
import NotFound404 from '../NotFound404/NotFound404';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

type AppProps = {
  selectedFilm: SelectedFilm;
  video: string;
};

function App({
  selectedFilm,
  video,
}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={(
            <WelcomeMain
              selectedFilm={selectedFilm}
            />
          )}
        />
        <Route
          path={AppRoute.MyList}
          element={(
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
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
          path={AppRoute.Film}
          element={(
            <MoviePage />
          )}
        />
        <Route
          path={AppRoute.AddReview}
          element={(
            <AddReview />
          )}
        />
        <Route
          path={AppRoute.Player}
          element={<Player video={video} />}
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
