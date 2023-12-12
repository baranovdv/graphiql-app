import { Fab, IconButton, TextField } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ArticleIcon from '@mui/icons-material/Article';
import classes from './InputURL.module.css';
import { MainPageGridAreas } from '../../../types/types';

export default function InputURL({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const refreshHandler = () => console.log('refresh');

  return (
    <nav
      className={classes.nav}
      style={{
        gridArea: gridAreaProp,
      }}
    >
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="register"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          fontSize: '0.7rem',
          p: '1rem',
        }}
      >
        Prettify&nbsp;
        <CleaningServicesIcon />
      </Fab>
      <TextField
        id="url"
        label="Enter URL"
        variant="outlined"
        size="small"
        sx={{ width: '100%' }}
      />
      <IconButton aria-label="refresh" onClick={refreshHandler}>
        <RefreshIcon />
      </IconButton>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="register"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          fontSize: '0.7rem',
          p: '1rem',
        }}
      >
        Docs&nbsp;
        <ArticleIcon />
      </Fab>
    </nav>
  );
}
