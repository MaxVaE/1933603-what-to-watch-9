import FilmCard from '../film-card/film-card';
import GenresItem from '../genres-item/genres-item';
import Footer from '../footer/footer';
import Header from '../header/header';

type WelcomeMainProps = {
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

export default function WelcomeMain({
  geners,
  films,
  selectedFilm,
}: WelcomeMainProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={selectedFilm.srcPoster} alt={`${selectedFilm.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{selectedFilm.gener}</span>
                <span className="film-card__year">{selectedFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              geners.map((gener) => (
                <GenresItem
                  key={gener}
                  gener={gener}
                  isActive={gener === 'All genres'}
                />
              ))
            }
          </ul>

          <div className="catalog__films-list">
            {
              films.map((film) => (
                <FilmCard
                  key={film.name}
                  name={film.name}
                  srcImg={film.srcImg}
                />
              ))
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
