import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import DetailsFilm from '../details-film/details-film';
import OverviewFilm from '../overview-film/overview-film';
import ReviewsFilm from './../reviews-film/reviews-film';

enum TabsNames {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

const TabComponents: {[key: string]: (props: {film: Film}) => JSX.Element} = {
  Overview: ({...props}) => <OverviewFilm {...props} />,
  Details: ({...props}) => <DetailsFilm {...props} />,
  Reviews: ({...props}) => <ReviewsFilm {...props} />,
};

type TabsProps = {
  film: Film;
}

function Tabs({
  film,
}: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<string>(TabsNames.OVERVIEW);

  const SelectedTabComponent = TabComponents[selectedTab];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.values(TabsNames).map((value) => (
              <li
                key={value}
                className={`film-nav__item${checkTab(value)}`}
                onClick={() => setSelectedTab(value)}
              >
                <Link
                  to="#"
                  className="film-nav__link"
                >
                  {value}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <SelectedTabComponent
        film={film}
      />
    </div>
  );

  function checkTab(tab: string) {
    return selectedTab === tab ? ' film-nav__item--active' : '';
  }
}

export default Tabs;
