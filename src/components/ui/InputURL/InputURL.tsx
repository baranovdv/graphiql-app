import { Fab, IconButton, TextField } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ArticleIcon from '@mui/icons-material/Article';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './InputURL.module.css';
import { MainPageGridAreas } from '../../../types/types';
import { useLazyGetDataQuery } from '../../../store/api/api';
import { useAppDispatch, useAppSelector } from '../../../store/store';

import {
  resetSlice,
  setInput,
  setResponse,
  setUrl,
} from '../../../store/reducers/mainPageSlice';
import prettifyEditor from '../../../utils/prettify/prettifyEditor';
import { handleResponseErrors } from '../../../utils/errors';

interface InputURLProps {
  gridAreaProp: MainPageGridAreas;
  toggleDocs: () => void;
}

export default function InputURL(props: InputURLProps) {
  const { gridAreaProp, toggleDocs } = props;

  const [isPlay, setisPlay] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const inputvalue = useAppSelector((state) => state.mainPage.input);
  const vars = useAppSelector((state) => state.mainPage.vars);
  const headers = useAppSelector((state) => state.mainPage.headers);
  const url = useAppSelector((state) => state.mainPage.url);
  const [CurrentUrl, setCurrentUrl] = useState<string>(url);
  const [triggerfn] = useLazyGetDataQuery();

  const prettifyHandler = () => {
    const prettifiedInput = prettifyEditor(inputvalue);

    dispatch(setInput(prettifiedInput));
  };
  const refreshHandler = () => {
    dispatch(setUrl(CurrentUrl));
    dispatch(resetSlice());
  };
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

      handleResponseErrors(response.error);
      if (
        response.data &&
        'errors' in response.data &&
        Array.isArray(response.data.errors)
      )
        response.data.errors.forEach((e: { message: string }) => {
          toast.error(e.message, { theme: 'dark' });
        });
      else dispatch(setResponse(JSON.stringify(response.data)));
      setisPlay(true);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message, { theme: 'dark' });
      setisPlay(true);
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
        data-testid="pretttify"
        onClick={prettifyHandler}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          fontSize: '0.7rem',
          p: '1rem',
          '@media (max-width: 768px)': {
            fontSize: '0',
          },
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
          '@media (max-width: 768px)': {
            fontSize: '0',
          },
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
        defaultValue={url}
        onChange={(e) => setCurrentUrl(e.target.value)}
      />
      <IconButton aria-label="refresh" onClick={refreshHandler}>
        <RefreshIcon />
      </IconButton>
      <IconButton
        aria-label="play"
        data-testid="play-button"
        onClick={() => {
          setisPlay(false);
          playHandler();
        }}
        sx={{
          position: 'absolute',
          top: '112px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          width: '5rem',
          zIndex: '30',
          aspectRatio: '1',
          '@media (max-width: 768px)': {
            width: '4rem',
            height: '4rem',
            top: '365px',
          },
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
