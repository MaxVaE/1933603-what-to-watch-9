import { Link } from 'react-router-dom';

type LogoProps = {
  isLinkLight?: boolean,
}

export default function Logo({
  isLinkLight = false,
}: LogoProps): JSX.Element {

  const linkLight: string = isLinkLight ? 'logo__link--light' : '';

  return (
    <div className="logo">
      <Link to="/" className={`logo__link${linkLight}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
