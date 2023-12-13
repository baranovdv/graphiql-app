import { Navigate } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

function PrivateRoute() {
  const LoggedIn = localStorage.getItem('LoggedInStatus');

  return LoggedIn === 'true' ? MainPage() : <Navigate to="/" replace />;
}
export default PrivateRoute;
