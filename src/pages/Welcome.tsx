import { Link } from 'react-router-dom';
import classes from '../styles/Welcome.module.css';
import InfoPerson from '../components/InfoPerson/InfoPerson';
import Header from '../components/Header/Header';
import { useLocale } from '../context/StoreContext';

export default function Welcome() {
  const { strings } = useLocale();

  console.log(strings);

  const array = [1, 2, 3];
  return (
    <>
      <Header />
      <main>
        <div className={classes.aboutProject}>
          <div className={classes.wrapper}>
            <div className={classes.mainLog}>
              <Link to="SignUp" className={classes.link}>
                {strings.singup_page_title}
              </Link>
              <Link to="SignIn" className={classes.link}>
                {strings.singin_page_title}
              </Link>
            </div>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.mainInfo}>
              <h2 className={classes.mainTitle}>{strings.about_project}</h2>
              <p className={classes.mainText}>{strings.about_project_text}</p>
            </div>
          </div>
        </div>
        <div className={classes.aboutTeam}>
          <h2>{strings.our_team}</h2>
          {array.map((key) => {
            return <InfoPerson key={key} />;
          })}
        </div>
      </main>
    </>
  );
}
