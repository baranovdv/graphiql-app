import { Button } from '@mui/material';
import { useState } from 'react';
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

  const clickHandler = (event: React.MouseEvent<HTMLElement>): void => {
    const { id } = event.target as HTMLElement;
    setMenu(id);
  };
  const dispatch = useAppDispatch();
  const vars = useAppSelector((state) => state.mainPage.vars);
  const headers = useAppSelector((state) => state.mainPage.headers);

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
          sx={{ textDecoration: menu === 'variables' ? 'underline' : '' }}
          disabled={menu === 'variables'}
          onClick={clickHandler}
        >
          QUERY VARIABLES
        </Button>
        <Button
          id="headers"
          variant="text"
          sx={{ textDecoration: menu === 'headers' ? 'underline' : '' }}
          disabled={menu === 'headers'}
          onClick={clickHandler}
        >
          HTTP HEADERS
        </Button>
      </nav>
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
    </section>
  );
}
