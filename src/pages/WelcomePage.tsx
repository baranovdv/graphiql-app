import styles from '../styles/main.module.css';

function WelcomePage() {
  return (
    <div className={styles.mainDiv}>
      <h1> This is Welcome Page</h1>
      <a href="/SignIn/">SignIn</a>
      <a href="/MainPage/">Main</a>
    </div>
  );
}
export default WelcomePage;
