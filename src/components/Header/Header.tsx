import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { auth, db, logout } from '../../firebase';
import classes from './Header.module.css';

export default function Header() {
  const [name, setName] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  const [user, loading] = useAuthState(auth);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    fetchUserName();
  }, [user, loading]);
  return (
    <header className={isScrolled ? classes.scrolled : ''}>
      <img
        className={classes.headerLogo}
        src="../../public/logo.png"
        alt="logo"
      />
      <div className={classes.headerTool}>
        {user ? (
          <>
            <div>{name}</div>
            <div>{user?.email}</div>
            <button
              type="button"
              className={classes.headerExit}
              onClick={logout}
            >
              выйти
            </button>
          </>
        ) : (
          <div>Not logged In</div>
        )}

        <select
          className={classes.headerSelect}
          aria-label="label to select language"
        >
          <option value="ru">russian</option>
          <option value="en">english</option>
        </select>
      </div>
    </header>
  );
}
