import classes from './InfoPerson.module.css';

export default function InfoPerson() {
  return (
    <div className={classes.personCard}>
      <img
        className={classes.personImg}
        src="../../public/avatar.png"
        alt="avatar"
      />
      <div>
        <h2 className={classes.personName}>Name person</h2>
        <p>
          frwenfre gnerp gern gren mfgwerog nnfwegnb mgfewog n wnefn wmefonf
          nfwegnmlhnyt, mgre ngwq nfw;p ngner gnwepnrg nwngwregnwn ;gnsn;re
          ngfdn.gnrepnd; gnrenphgr engv;m jweron ngrego[n ngregregregregreg
          fgerg egregrr grejhukj juki;p lijiyr ewrg twef wfwe
        </p>
      </div>
    </div>
  );
}
