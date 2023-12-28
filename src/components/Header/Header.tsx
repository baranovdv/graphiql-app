import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocale, useLocaleDispatch } from '../../context/StoreContext';
import { AppLanguages } from '../../types/types';
import { auth, logout } from '../../firebase';
import classes from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { currentLanguage } = useLocale();

  const dispatch = useLocaleDispatch();

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
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            dispatch({
              type: 'change_language',
              payload: event.target.value as AppLanguages,
            })
          }
          aria-label="label to select language"
          value={currentLanguage}
        >
          <option value="ru">russian</option>
          <option value="en">english</option>
        </select>
      </div>
    </header>
  );
}
