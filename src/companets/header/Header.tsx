import { useEffect, useState } from 'react';
import classes from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        src="../../../public/logo.png"
        alt="logo"
      />
      <div className={classes.headerTool}>
        {/* будет скрываться в будущем если user вошёл в систему */}
        <button type="button" className={classes.headerExit}>
          выйти
        </button>
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
