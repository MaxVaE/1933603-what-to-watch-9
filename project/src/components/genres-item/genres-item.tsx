type GenresItemProps = {
  gener: string,
  isActive?: boolean,
}

export default function GenresItem({
  gener,
  isActive = false,
}: GenresItemProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${
      isActive
        ? 'catalog__genres-item--active'
        : ''}
      `}
    >
      <a href="/" className="catalog__genres-link">{gener}</a>
    </li>
  );
}
