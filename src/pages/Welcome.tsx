import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Fab } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ApiIcon from '@mui/icons-material/Api';
import classes from '../styles/Welcome.module.css';
import { useLocale } from '../context/StoreContext';
import { auth } from '../firebase';
import teamData from '../data/teamData';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';

export default function Welcome() {
  const { strings } = useLocale();

  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  return (
    <section className={classes.welcomeSection}>
      <nav className={classes.nav}>
        <h1 className={classes.navTitle}>
          Welcome to GraphQL application by{' '}
          <span className={classes.gradient}>TwentyMinutesAdventure</span> team!
        </h1>
        {!user && !loading && (
          <section className={classes.navGuest}>
            <h2 className={classes.navSubtitle}>
              Hello! Please register or login:
            </h2>
            <Fab
              variant="extended"
              size="large"
              color="info"
              aria-label="register"
              onClick={() => navigate('/SignUp')}
              sx={{
                width: '20%',
                minWidth: '180px',
                textTransform: 'none',
              }}
            >
              {strings.singup_page_title}&nbsp;
              <PersonIcon />
            </Fab>
            <Fab
              variant="extended"
              size="large"
              color="info"
              aria-label="login"
              onClick={() => navigate('/SignIn')}
              sx={{
                width: '20%',
                minWidth: '180px',
                textTransform: 'none',
              }}
            >
              {strings.singin_page_title}&nbsp;
              <LoginIcon />
            </Fab>
          </section>
        )}
        {user && !loading && (
          <section className={classes.navLogged}>
            <h2 className={classes.navSubtitleLogged}>
              Hello! Please proceed to the main page:
            </h2>
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
          </section>
        )}
        {loading}
      </nav>
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>{strings.about_project}</h2>
        <p className={classes.aboutText}>{strings.about_project_text}</p>
      </section>
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>{strings.our_team}</h2>
        {teamData.map((member) => {
          return <TeamMemberCard key={member.name} {...member} />;
        })}
      </section>
    </section>
  );
}
