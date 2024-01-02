import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MainPage } from '../pages/MainPage';
import { auth } from '../firebase';
import { useLocale } from '../context/StoreContext';

function PrivateRoute() {
  const [user, loading] = useAuthState(auth);

  const { strings } = useLocale();

  if (loading) {
    return <div>{strings.loading}</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <MainPage />;
}

export default PrivateRoute;
