import { Link } from 'react-router-dom';
import classes from '../styles/404Page.module.css';
import Footer from '../components/Footer/Footer';

function Page404() {
  return (
    <div className={classes.wrapperPage}>
      <div className={classes.wrapper}>
        <div className={classes.info404}>
          <h1 className={classes.title404}>404</h1>
          <h2 className={classes.error404}>Ошибка!</h2>
          <p className={classes.description404}>
            К сожалению, запрашиваемая вами страница не найдена
          </p>
          <Link to="/">
            <button className={classes.button404} type="button">
              НА ГЛАВНУЮ
            </button>
          </Link>
        </div>
        <picture className={classes.couch404}>
          <source
            media="(max-width:580px)"
            srcSet="../../public/couch_small_404.png"
          />
          <source
            media="(max-width:1350px)"
            srcSet="../../public/couch_404.png"
          />
          <img src="../../public/couch_lurge_404.png" alt="couch" />
        </picture>
      </div>
      <Footer />
    </div>
  );
}

export default Page404;
