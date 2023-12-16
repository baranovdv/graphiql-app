import { Fab, IconButton, TextField } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ArticleIcon from '@mui/icons-material/Article';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react';
import classes from './InputURL.module.css';
import { MainPageGridAreas } from '../../../types/types';
import { useLazyGetDataQuery } from '../../../store/api/api';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setResponse, setUrl } from '../../../store/reducers/mainPageSlice';

interface InputURLProps {
  gridAreaProp: MainPageGridAreas;
  toggleDocs: () => void;
}

export default function InputURL(props: InputURLProps) {
  const { gridAreaProp, toggleDocs } = props;

  const [isPlay, setisPlay] = useState<boolean>(true);
  const refreshHandler = () => console.log('refresh');
  const dispatch = useAppDispatch();
  const inputvalue = useAppSelector((state) => state.mainPage.input);
  const vars = useAppSelector((state) => state.mainPage.vars);
  const headers = useAppSelector((state) => state.mainPage.headers);
  const url = useAppSelector((state) => state.mainPage.url);
  const [triggerfn] = useLazyGetDataQuery();
  const playHandler = async () => {
    try {
      const response = await triggerfn({
        url,
        query: `${inputvalue}`,
        variables: JSON.parse(vars),
        headersopt: Object.assign(JSON.parse(headers || '{}'), {
          'Content-Type': 'application/json',
        }),
      });
      dispatch(setResponse(JSON.stringify(response.data)));
      setisPlay(true);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

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
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="register"
        onClick={toggleDocs}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          fontSize: '0.7rem',
          p: '1rem',
        }}
      >
        Docs&nbsp;
        <ArticleIcon />
      </Fab>
      <TextField
        id="url"
        label="Enter URL"
        variant="outlined"
        size="small"
        sx={{ width: '100%' }}
        value={url}
        onChange={(e) => dispatch(setUrl(e.target.value))}
      />
      <IconButton aria-label="refresh" onClick={refreshHandler}>
        <RefreshIcon />
      </IconButton>
      <IconButton
        aria-label="play"
        onClick={() => {
          setisPlay(false);
          playHandler();
        }}
        sx={{
          position: 'absolute',
          top: '7rem',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          width: '4rem',
          aspectRatio: '1',
        }}
        size="large"
      >
        {isPlay ? (
          <PlayArrowIcon fontSize="large" />
        ) : (
          <PauseIcon fontSize="large" />
        )}
      </IconButton>
    </nav>
  );
}
