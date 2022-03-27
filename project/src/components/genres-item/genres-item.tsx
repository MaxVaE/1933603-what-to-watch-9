import { Link } from 'react-router-dom';
import { Genre } from '../../types/genre';

type GenresItemProps = {
  genre: Genre;
  isActive?: boolean;
  onClick: () => void;
}

export default function GenresItem({
  genre,
  isActive = false,
  onClick,
}: GenresItemProps): JSX.Element {
  return (
    <li
      className={`catalog__genres-item ${
        isActive
          ? 'catalog__genres-item--active'
          : ''}
        `}
      onClick={onClick}
    >
      <Link
        to="/"
        className="catalog__genres-link"
      >
        {genre}
      </Link>
    </li>
  );
}
