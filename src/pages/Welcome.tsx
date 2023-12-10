import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import classes from '../styles/Welcome.module.css';
import InfoPerson from '../components/InfoPerson/InfoPerson';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { auth } from '../firebase';

export default function Welcome() {
  const array = [1, 2, 3];
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Header />
      <main>
        <div className={classes.aboutProject}>
          <div className={classes.wrapper}>
            <div className={classes.mainLog}>
              {!user && !loading && (
                <>
                  <Link to="SignUp" className={classes.link}>
                    Регистрация
                  </Link>
                  <Link to="SignIn" className={classes.link}>
                    Вход
                  </Link>
                </>
              )}{' '}
              {user && !loading && (
                <Link to="MainPage" className={classes.link}>
                  Главная
                </Link>
              )}
              {loading}
            </div>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.mainInfo}>
              <h2 className={classes.mainTitle}>об проекте</h2>
              <p className={classes.mainText}>
                Наша команда разработала инновационный проект, который
                значительно упрощает взаимодействие с GraphQL. GraphQL - это не
                просто язык запросов для API, это целая среда выполнения,
                которая позволяет вам эффективно работать с вашими существующими
                данными. Одним из ключевых преимуществ GraphQL является его
                полное и понятное описание данных в вашем API. Это обеспечивает
                клиентам возможность запрашивать именно ту информацию, которая
                им необходима, исключая лишние данные. Это не только упрощает
                процесс работы с API, но и делает его более эффективным. В
                целом, наш проект предлагает решение, которое делает
                взаимодействие с GraphQL более простым и эффективным, открывая
                новые возможности для разработчиков и пользователей. Мы верим,
                что это будет полезным дополнением к любому проекту, который
                использует GraphQL.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.aboutTeam}>
          <h2>Наша команда</h2>
          {array.map((key) => {
            return <InfoPerson key={key} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
