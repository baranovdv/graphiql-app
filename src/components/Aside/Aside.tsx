/* eslint-disable @typescript-eslint/dot-notation */
import { useEffect } from 'react';
// import { buildClientSchema, printSchema } from 'graphql';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../store/store';
import classes from './Aside.module.css';
import { useLazyGetSchemaQuery } from '../../store/api/api';
import { setDocs } from '../../store/reducers/mainPageSlice';
import getTypesFromIntrospection from '../../utils/getTypesFromIntrospection';
import Docs from '../Docs/Docs';

interface AsideProps {
  isOpen: boolean;
  toggleDocs: () => void;
}

export default function Aside({ isOpen, toggleDocs }: AsideProps) {
  const url = useAppSelector((state) => state.mainPage.url);
  const dispatch = useAppDispatch();
  const [triggerfn] = useLazyGetSchemaQuery();
  const DocsHandler = async () => {
    try {
      const response = await triggerfn(url);
      if (!response.data) throw new Error();

      const docsData = getTypesFromIntrospection(response.data);

      dispatch(setDocs(docsData));
    } catch (error) {
      if (error instanceof Error) setDocs(error.message);
    }
  };

  const closeButtonHandler = () => toggleDocs();

  useEffect(() => {
    DocsHandler();
  }, [url]);

  return (
    <aside className={`${classes.aside} ${isOpen && classes.open}`}>
      <IconButton
        sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
        aria-label="close"
        onClick={closeButtonHandler}
      >
        <CloseIcon />
      </IconButton>
      <Docs />
    </aside>
  );
}
