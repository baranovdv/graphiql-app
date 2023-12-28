import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocale, useLocaleDispatch } from '../../context/StoreContext';
import { AppLanguages } from '../../types/types';
import { auth, logout } from '../../firebase';
import Logo from '../../assets/img/Logo.svg';
import classes from './Header.module.css';
import LangToggleButton from './langToggleButton/langToggleButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { strings, currentLanguage } = useLocale();

  const dispatch = useLocaleDispatch();

  const [user, loading] = useAuthState(auth);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 5);
  };

  const langToggleHandler = (lang: AppLanguages) => {
    dispatch({
      type: 'change_language',
      payload: lang,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? classes.scrolled : ''}>
      <Link to="./">
        <img className={classes.headerLogo} src={Logo} alt="logo" />
      </Link>
      {/* <div className={classes.headerTool}>
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
              {strings.logout}
            </button>
          </>
        )}
        {loading && !user && (
          <div className={classes.headerText}>Загружаю...</div>
        )}
        {!loading && !user && (
          <div className={classes.headerText}>Вход не выполнен</div>
        )} 
              </div> */}
      <h2 className={classes.headerTitle}>GraphQL App</h2>
      <div className={classes.headerButtons}>
        {loading ? (
          <p>...loading</p>
        ) : (
          user && (
            <Fab
              variant="extended"
              size="medium"
              aria-label="logout"
              color="info"
              onClick={logout}
              sx={{ textTransform: 'none' }}
            >
              {strings.logout}&nbsp;
              <LogoutIcon />
            </Fab>
          )
        )}
        <LangToggleButton
          lang={currentLanguage === 'En' ? 'Ру' : 'En'}
          onClick={langToggleHandler}
        />
      </div>
    </header>
  );
}
