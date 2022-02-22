import WelcomeMain from '../welcome-main/welcome-main';

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
    <WelcomeMain
      geners={geners}
      films={films}
      selectedFilm={selectedFilm}
    />
  );
}

export default App;
