export type Film = {
  id: string,
  name: string,
  imgSrc: string,
  videoSrc: string,
};

export type SelectedFilm = {
  title: string,
  gener: string,
  year: number,
  srcPoster: string,
};

export type Films = Film[];
