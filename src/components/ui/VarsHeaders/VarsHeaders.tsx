import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MainPageGridAreas } from '../../../types/types';
import classes from './VarsHeaders.module.css';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setHeaders, setVars } from '../../../store/reducers/mainPageSlice';

export default function VarsHeaders({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const [menu, setMenu] = useState('variables');
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  const clickHandler = (event: React.MouseEvent<HTMLElement>): void => {
    const { id } = event.target as HTMLElement;
    setMenu(id);
  };
  const dispatch = useAppDispatch();
  const vars = useAppSelector((state) => state.mainPage.vars);
  const headers = useAppSelector((state) => state.mainPage.headers);

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
            <KeyboardArrowDownIcon fontSize="small" />
          ) : (
            <KeyboardArrowUpIcon fontSize="small" />
          )}
        </IconButton>
      </nav>
      <div
        className={`${classes.content} ${isContentOpen && classes.contentShow}`}
      >
        {menu === 'variables' && (
          <textarea
            className={classes.textarea}
            id="ev"
            name="ev"
            rows={3}
            cols={30}
            onChange={(e) => {
              dispatch(setVars(e.target.value));
            }}
            value={vars}
          />
        )}
        {menu === 'headers' && (
          <textarea
            className={classes.textarea}
            id="ev"
            name="ev"
            rows={3}
            cols={30}
            onChange={(e) => {
              dispatch(setHeaders(e.target.value));
            }}
            value={headers}
          />
        )}
      </div>
    </section>
  );
}
