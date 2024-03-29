import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import { Button, ButtonGroup } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ApiIcon from '@mui/icons-material/Api';
import classes from './Welcome.module.css';
import { useLocale } from '../../context/StoreContext';
import { auth } from '../../firebase';
import teamData from '../../data/teamData';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';

export default function Welcome() {
  const { strings } = useLocale();

  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const signupButtonHandler = () => navigate('/SignUp');

  const signinButtonHandler = () => navigate('/SignIn');

  const mainPageButtonHandler = () => navigate('/MainPage');

  const buttonsGuest = [
    <Button
      key="signin"
      onClick={signinButtonHandler}
      data-testid="login"
      color="info"
      sx={{
        textTransform: 'none',
        zIndex: '0',
      }}
    >
      {strings.singin_page_title}&nbsp;
      <PersonIcon />
    </Button>,
    <Button
      key="signup"
      onClick={signupButtonHandler}
      data-testid="register"
      color="info"
      sx={{
        textTransform: 'none',
        zIndex: '0',
      }}
    >
      {strings.singup_page_title}&nbsp;
      <LoginIcon />
    </Button>,
  ];

  return (
    <section className={classes.welcomeSection}>
      <nav className={classes.nav}>
        {!user && !loading && (
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
            sx={{
              marginLeft: 'auto',
              marginTop: '2rem',
              marginRight: '1rem',
              '@media(max-width: 768px)': {
                marginTop: '1rem',
                marginRight: '0',
                marginBottom: '1rem',
              },
            }}
          >
            {buttonsGuest}
          </ButtonGroup>
        )}
        {user && !loading && (
          <Button
            variant="contained"
            color="info"
            size="large"
            onClick={mainPageButtonHandler}
            sx={{
              textTransform: 'none',
              zIndex: '0',
              marginLeft: 'auto',
              marginTop: '2rem',
              marginRight: '1rem',
              '@media(max-width: 768px)': {
                marginTop: '1rem',
                marginRight: '0',
                marginBottom: '1rem',
              },
            }}
          >
            {strings.main_page_title}&nbsp;
            <ApiIcon />
          </Button>
        )}
        {loading && <div className={classes.loading}> {strings.loading}</div>}
        <h1 className={classes.navTitle}>
          {strings.welcome_page_title_1}{' '}
          <span className={classes.gradient}>TwentyMinutesAdventure</span>{' '}
          {strings.welcome_page_title_2}
        </h1>
      </nav>
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>{strings.about_project}</h2>
        <p className={classes.aboutText}>{strings.about_project_text}</p>
      </section>
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>{strings.about_course}</h2>
        <p className={classes.aboutText}>{strings.about_course_text}</p>
      </section>
      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>{strings.our_team}</h2>
        {teamData.map((member) => {
          return <TeamMemberCard key={member.id} {...member} />;
        })}
      </section>
      <ToastContainer />
    </section>
  );
}
