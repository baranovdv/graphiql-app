import { Button } from '@mui/material';
import { useState } from 'react';
import { MainPageGridAreas } from '../../../types/types';
import classes from './VarsHeaders.module.css';

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
          defaultValue="QUERY VARIABLES"
        />
      )}
      {menu === 'headers' && (
        <textarea
          className={classes.textarea}
          id="ev"
          name="ev"
          rows={3}
          cols={30}
          defaultValue="HTTP HEADERS"
        />
      )}
    </section>
  );
}
