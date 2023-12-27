import classes from './footer.module.css';

export default function Footer() {
  return (
    <footer
      className={classes.footer}
      style={{
        maxWidth: 1520,
      }}
    >
      <a href="https://github.com/baranovdv" className={classes.link}>
        <img
          className={classes.footerGithubLink}
          src="../../public/github.svg"
          alt="gitlogo"
        />
      </a>

      <span className={classes.footerYear}>2023-2024</span>
      <a href="https://rs.school/react/" className={classes.link}>
        <img
          className={classes.footerRssLink}
          src="../../public/RSS_React_logo.png"
          alt="Rslogo"
        />
      </a>
    </footer>
  );
}
