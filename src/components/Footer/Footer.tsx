import classes from './Footer.module.css';
import githubLogo from '../../assets/img/github.svg';
import RSLogo from '../../assets/img/RSS_React_logo.png';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <a href="https://github.com/baranovdv" className={classes.link}>
        <img
          className={classes.footerGithubLink}
          src={githubLogo}
          alt="gitlogo"
        />
      </a>

      <span className={classes.footerYear}>2023-2024</span>
      <a href="https://rs.school/react/" className={classes.link}>
        <img className={classes.footerRssLink} src={RSLogo} alt="Rslogo" />
      </a>
    </footer>
  );
}
