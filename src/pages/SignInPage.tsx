import { useNavigate } from 'react-router-dom';
import styles from '../styles/SingUp.module.css';
import Footer from '../components/Footer/Footer';

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
    <>
      <main className={styles.main}>
        <p>This is Sign in Page</p>
        <button type="button" onClick={handleClick}>
          {LoggedIn === 'true' ? 'SignOut' : 'SignIn'}
        </button>
      </main>
      <Footer />
    </>
  );
}

export default SignInPage;
