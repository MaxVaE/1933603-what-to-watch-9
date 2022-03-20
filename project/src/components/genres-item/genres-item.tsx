import { Link } from 'react-router-dom';

type GenresItemProps = {
  genre: string;
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
