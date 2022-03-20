import GenresItem from '../genres-item/genres-item';
import { useAppDispatch, useAppSelector } from './../../hooks/index';
import { changeGenre, filterFilmsSelectedGenre } from './../../store/action';

type GenresListProps = {
  genres: string[];
}

export default function GenresList({
  genres,
}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.selectedGenre);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <GenresItem
            key={genre}
            genre={genre}
            isActive={genre === selectedGenre}
            onClick={() => {
              if (genre !== selectedGenre) {
                dispatch(changeGenre(genre));
                dispatch(filterFilmsSelectedGenre());
              }
            }}
          />
        ))
      }
    </ul>
  );
}
