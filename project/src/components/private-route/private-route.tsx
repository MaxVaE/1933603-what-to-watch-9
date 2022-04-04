import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute } from '../../const';
import { isCheckedAuth } from '../../films';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

export default function PrivateRoute({
  children,
}: PrivateRouteProps): JSX.Element {
  const {
    authorizationStatus,
  } = useAppSelector((state) => state);

  return (
    isCheckedAuth(authorizationStatus)
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
