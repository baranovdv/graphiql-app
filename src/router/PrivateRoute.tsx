import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MainPage } from '../pages/MainPage';
import { auth } from '../firebase';

function PrivateRoute() {
  const [, loading] = useAuthState(auth);

  return loading ? <Navigate to="/" replace /> : MainPage();
}
export default PrivateRoute;
