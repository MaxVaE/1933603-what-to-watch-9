import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const geners = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const films = [
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    srcImg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    name: 'Bohemian Rhapsody',
    srcImg: 'img/bohemian-rhapsody.jpg',
  },
  {
    name: 'Macbeth',
    srcImg: 'img/macbeth.jpg',
  },
  {
    name: 'Aviator',
    srcImg: 'img/aviator.jpg',
  },{
    name: 'We need to talk about Kevin',
    srcImg: 'img/we-need-to-talk-about-kevin.jpg',
  },{
    name: 'What We Do in the Shadows',
    srcImg: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    name: 'Revenant',
    srcImg: 'img/revenant.jpg',
  },
  {
    name: 'Johnny English',
    srcImg: 'img/johnny-english.jpg',
  },
  {
    name: 'Shutter Island',
    srcImg: 'img/shutter-island.jpg',
  },
  {
    name: 'Pulp Fiction',
    srcImg: 'img/pulp-fiction.jpg',
  },
  {
    name: 'No Country for Old Men',
    srcImg: 'img/no-country-for-old-men.jpg',
  },
  {
    name: 'Snatch',
    srcImg: 'img/snatch.jpg',
  },
  {
    name: 'Moonrise Kingdom',
    srcImg: 'img/moonrise-kingdom.jpg',
  },
  {
    name: 'Seven Years in Tibet',
    srcImg: 'img/seven-years-in-tibet.jpg',
  },
  {
    name: 'Midnight Special',
    srcImg: 'img/midnight-special.jpg',
  },
  {
    name: 'War of the Worlds',
    srcImg: 'img/war-of-the-worlds.jpg',
  },
  {
    name: 'Dardjeeling Limited',
    srcImg: 'img/dardjeeling-limited.jpg',
  },
  {
    name: 'Orlando',
    srcImg: 'img/orlando.jpg',
  },
  {
    name: 'Mindhunter',
    srcImg: 'img/mindhunter.jpg',
  },
  {
    name: 'Midnight Special',
    srcImg: 'img/midnight-special.jpg',
  },
];

const selectedFilm = {
  title: 'The Grand Budapest Hotel',
  gener: 'Drama',
  year: 2014,
  srcPoster: 'img/the-grand-budapest-hotel-poster.jpg',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      geners={geners}
      films={films}
      selectedFilm={selectedFilm}
    />
  </React.StrictMode>,
  document.getElementById('root'));
