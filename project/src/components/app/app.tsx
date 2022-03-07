import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Films, SelectedFilm } from '../../types/films';

import WelcomeMain from '../welcome-main/welcome-main';
import NotFound404 from '../NotFound404/NotFound404';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

type AppProps = {
  geners: string[],
  films: Films,
  selectedFilm: SelectedFilm,
  video: string,
};

function App({
  geners,
  films,
  selectedFilm,
  video,
}: AppProps): JSX.Element {
  const myFilms = films.filter((film, index) => index < 6);

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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList myFilms={myFilms}/>
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
            <MoviePage films={films.filter((film, index) => index < 4)} />
          )}
        />
        <Route
          path={AppRoute.AddReview}
          element={(
            <AddReview film={films[0]} />
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
