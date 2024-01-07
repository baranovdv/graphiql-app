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

  const LangToggleButtonHandler = () => onClick(lang);

  return (
    <Button
      variant="contained"
      color="info"
      startIcon={flagIcon}
      size="medium"
      data-testid="lang-change"
      sx={{
        width: '72px',
        textTransform: 'none',
        fontWeight: '700',
        background: '#0288D1',
      }}
      onClick={LangToggleButtonHandler}
    >
      {lang}
    </Button>
  );
}
