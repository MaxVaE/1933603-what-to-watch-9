import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { SelectedFilm } from '../../types/films';

import WelcomeMain from '../welcome-main/welcome-main';
import NotFound404 from '../NotFound404/NotFound404';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../films';

const video = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

const selectedFilm: SelectedFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  srcPoster: 'img/the-grand-budapest-hotel-poster.jpg',
};

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
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
              authorizationStatus={authorizationStatus}
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
