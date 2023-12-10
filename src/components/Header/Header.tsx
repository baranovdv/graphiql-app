import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase';
import classes from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? classes.scrolled : ''}>
      <img
        className={classes.headerLogo}
        src="../../public/logo.png"
        alt="logo"
      />
      <div className={classes.headerTool}>
        {!loading && user && (
          <>
            <div className={classes.headerTexts}>
              <div className={classes.headerText}>{user.displayName}</div>
              <div className={classes.headerText}>{user?.email}</div>
            </div>
            <button
              type="button"
              className={classes.headerExit}
              onClick={logout}
            >
              Выйти
            </button>
          </>
        )}
        {loading && !user && (
          <div className={classes.headerText}>Загружаю...</div>
        )}
        {!loading && !user && (
          <div className={classes.headerText}>Вход не выполнен</div>
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
