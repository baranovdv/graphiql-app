import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import classes from '../styles/404Page.module.css';
import Footer from '../components/Footer/Footer';
import coachLarge from '../assets/img/couch_lurge_404.png';
import coachSmall from '../assets/img/couch_small_404.png';
import coach from '../assets/img/couch_404.png';
import { useLocale } from '../context/StoreContext';

function Page404() {
  const { strings } = useLocale();

  const navigate = useNavigate();
  return (
    <div className={classes.wrapperPage}>
      <div className={classes.wrapper}>
        <div className={classes.info404}>
          <h1 className={classes.title404}>404</h1>
          <h2 className={classes.error404}>{strings.error}</h2>
          <p className={classes.description404}>{strings.error_message}</p>
          <Fab
            variant="extended"
            size="large"
            color="info"
            aria-label="login"
            onClick={() => navigate('/MainPage')}
            sx={{
              width: '20%',
              minWidth: '180px',
              textTransform: 'none',
            }}
          >
            {strings.main_page_title}&nbsp;
            <ApiIcon />
          </Fab>
        </div>
        <picture className={classes.couch404}>
          <source media="(max-width:580px)" srcSet={coachSmall} />
          <source media="(max-width:1350px)" srcSet={coach} />
          <img src={coachLarge} alt="couch" />
        </picture>
      </div>
      <Footer />
    </div>
  );
}

export default Page404;
