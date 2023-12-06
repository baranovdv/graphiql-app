import { useNavigate } from 'react-router-dom';
import styles from '../styles/main.module.css';

function SignInPage() {
  const LoggedIn = localStorage.getItem('LoggedInStatus');
  const navigate = useNavigate();
  const handleClick = () => {
    if (LoggedIn === 'false' || !LoggedIn) {
      localStorage.setItem('LoggedInStatus', 'true');
    } else localStorage.setItem('LoggedInStatus', 'false');
    navigate('/Mainpage/');
  };

  return (
    <div className={styles.mainDiv}>
      <p>This is Sign in Page</p>
      <button type="button" onClick={handleClick}>
        {LoggedIn === 'true' ? 'SignOut' : 'SignIn'}
      </button>
    </div>
  );
}

export default SignInPage;
