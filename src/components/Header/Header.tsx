import { useEffect, useState } from 'react';
import { useLocale, useLocaleDispatch } from '../../context/StoreContext';
import { AppLanguages } from '../../types/types';
import classes from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { strings, currentLanguage } = useLocale();

  const dispatch = useLocaleDispatch();

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

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
        {/* будет скрываться в будущем если user вошёл в систему */}
        <button type="button" className={classes.headerExit}>
          {strings.logout}
        </button>
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
