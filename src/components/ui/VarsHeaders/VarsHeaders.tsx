import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import { MainPageGridAreas } from '../../../types/types';
import classes from './VarsHeaders.module.css';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setHeaders, setVars } from '../../../store/reducers/mainPageSlice';
import HLTextArea from '../HLTextArea/HLTextArea';

export default function VarsHeaders({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const [menu, setMenu] = useState('variables');
  const [isContentOpen, setIsContentOpen] = useState<boolean>(true);

  const clickHandler = (event: React.MouseEvent<HTMLElement>): void => {
    const { id } = event.target as HTMLElement;

    setMenu(id);
  };

  const dispatch = useAppDispatch();
  const vars = useAppSelector((state) => state.mainPage.vars);
  const headers = useAppSelector((state) => state.mainPage.headers);

  SyntaxHighlighter.registerLanguage('graphql', graphql);
  SyntaxHighlighter.registerLanguage('json', json);

  const toggleContentHandler = () => setIsContentOpen(!isContentOpen);

  return (
    <section
      className={classes.section}
      style={{
        gridArea: gridAreaProp,
      }}
    >
      <nav className={classes.navbar}>
        <Button
          id="variables"
          variant="text"
          sx={{
            textDecoration: menu === 'variables' ? 'underline' : '',
            textTransform: 'none',
          }}
          disabled={menu === 'variables'}
          onClick={clickHandler}
        >
          Query Vars
        </Button>
        <Button
          id="headers"
          variant="text"
          sx={{
            textDecoration: menu === 'headers' ? 'underline' : '',
            textTransform: 'none',
          }}
          disabled={menu === 'headers'}
          onClick={clickHandler}
        >
          HTTP Headers
        </Button>
        <IconButton
          aria-label="show content"
          onClick={toggleContentHandler}
          sx={{ marginLeft: 'auto' }}
        >
          {isContentOpen ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )}
        </IconButton>
      </nav>
      <div
        className={`${classes.content} ${isContentOpen && classes.contentShow}`}
      >
        {menu === 'variables' && (
          <HLTextArea
            type="vars"
            value={vars}
            onChange={(e) => {
              dispatch(setVars(e.target.value));
            }}
          />
        )}
        {menu === 'headers' && (
          <HLTextArea
            type="headers"
            value={headers}
            onChange={(e) => {
              dispatch(setHeaders(e.target.value));
            }}
          />
        )}
      </div>
    </section>
  );
}
