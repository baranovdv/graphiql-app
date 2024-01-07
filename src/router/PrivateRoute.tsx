import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MainPage } from '../pages/MainPage/MainPage';
import { auth } from '../firebase';
import Spinner from '../assets/img/spinner.svg';

function PrivateRoute() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="loadingDiv">
        <img src={Spinner} alt="LoadingImg" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <MainPage />;
}

export default PrivateRoute;
