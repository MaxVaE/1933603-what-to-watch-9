import { Route, Routes } from 'react-router-dom';

import Player from '../player/player';
import { AppRoute } from '../../const';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import { useAppSelector } from '../../hooks';
import { isCheckedUnknown } from '../../films';
import { SelectedFilm } from '../../types/films';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import browserHistory from '../../browser-history';
import NotFound404 from '../NotFound404/NotFound404';
import WelcomeMain from '../welcome-main/welcome-main';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import LoadingScreen from '../loading-screen/loading-screen';
import withLoadFilm from '../../hocs/with-load-film/with-load-film';

const MoviePageWrapped = withLoadFilm(MoviePage);
const AddReviewWrapped = withLoadFilm(AddReview);

const video = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

const selectedFilm: SelectedFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  srcPoster: 'img/the-grand-budapest-hotel-poster.jpg',
};

function App(): JSX.Element {
  const {
    authorizationStatus,
    isDataLoaded,
  } = useAppSelector((state) => state);

  if (isCheckedUnknown(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
            <PrivateRoute>
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
            <MoviePageWrapped />
          )}
        />
        <Route
          path={AppRoute.AddReview}
          element={(
            <PrivateRoute>
              <AddReviewWrapped />
            </PrivateRoute>
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
    </HistoryRouter>
  );
}

export default App;
