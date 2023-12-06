import classes from './Welcome.module.css';

export default function Welcome() {
  return (
    <main>
      <div className={classes.aboutProject}>
        <div className={classes.wrapper}>
          <div className={classes.mainLog}>
            <p>Регестрация</p>
            <p>Вход</p>
          </div>
        </div>
        <div className={classes.mainInfo}>
          <h2 className={classes.mainTitle}>об проекте</h2>
          <p className={classes.mainText}>
            frwenfre gnerp gern gren mfgwerog nnfwegnb mgfewog n wnefn wmefonf
            nfwegnmlhnyt, mgre ngwq nfw;p ngner gnwepnrg nwngwregnwn ;gnsn;re
            ngfdn.gnrepnd; gnrenphgr engv;m jweron ngrego[n ngregregregregreg
            fgerg egregrr grejhukj juki;p lijiyr ewrg twef wfwe
          </p>
          <p className={classes.mainText}>
            frwenfre gnerp gern gren mfgwerog nnfwegnb mgfewog n wnefn wmefonf
            nfwegnmlhnyt, mgre ngwq nfw;p ngner gnwepnrg nwngwregnwn ;gnsn;re
            ngfdn.gnrepnd; gnrenphgr engv;m jweron ngrego[n ngregregregregreg
            fgerg egregrr grejhukj juki;p lijiyr ewrg twef wfwe frwenfre gnerp
            gern gren mfgwerog nnfwegnb mgfewog n wnefn wmefonf nfwegnmlhnyt,
            mgre ngwq nfw;p ngner gnwepnrg nwngwregnwn ;gnsn;re ngfdn.gnrepnd;
            gnrenphgr engv;m jweron ngrego[n ngregregregregreg fgerg egregrr
            grejhukj juki;p lijiyr ewrg twef wfwe
          </p>
        </div>
      </div>
      <div className={classes.aboutTeam}>
        <h2>Наша команда</h2>
      </div>
    </main>
  );
}
