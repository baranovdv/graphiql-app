import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MainPage } from '../pages/MainPage';
import { auth } from '../firebase';

function PrivateRoute() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <MainPage />;
}

export default PrivateRoute;
