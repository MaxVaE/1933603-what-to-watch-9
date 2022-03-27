import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function NotFound404(): JSX.Element {
  return (
    <div>
      <p>404 Not Found</p>
      <Link to={AppRoute.Root}>
        <button type="button">Go to main</button>
      </Link>
    </div>
  );
}
