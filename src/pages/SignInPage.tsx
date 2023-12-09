import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import Footer from '../components/Footer/Footer';
import styles from '../styles/SingIn.module.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/MainPage');
  }, [user, loading]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.login}>
          <div className={styles.login__container}>
            <input
              type="text"
              className={styles.login__textBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className={styles.login__textBox}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              type="button"
              className={styles.login__btn}
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <button
              type="button"
              className={(styles.login__btn, styles.login__google)}
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
            <div>
              Dont have an account? <Link to="/SignUp">Register</Link> now.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignInPage;
