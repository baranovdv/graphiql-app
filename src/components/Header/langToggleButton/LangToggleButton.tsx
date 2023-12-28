import { Button, Icon } from '@mui/material';
import { AppLanguages } from '../../../types/types';
import FlagEn from '../../../assets/img/engflag.png';
import FlagRu from '../../../assets/img/rusflag.png';
import classes from './LangToggleButton.module.css';

interface LangToggleButtonProps {
  lang: AppLanguages;
  onClick: (lang: AppLanguages) => void;
}

const flag: Record<AppLanguages, string> = {
  En: FlagEn,
  Ру: FlagRu,
};

export default function LangToggleButton({
  lang,
  onClick,
}: LangToggleButtonProps) {
  const flagIcon = (
    <Icon>
      <img className={classes.img} alt="edit" src={flag[lang]} />
    </Icon>
  );

  return (
    <Button
      variant="outlined"
      color="info"
      startIcon={flagIcon}
      size="large"
      sx={{
        width: '72px',
        textTransform: 'none',
        // borderColor: 'orange',
        // color: 'white',
        // background: 'lightgrey',
        // '&:hover': { background: 'orange' },
      }}
      onClick={() => onClick(lang)}
    >
      {lang}
    </Button>
  );
}
