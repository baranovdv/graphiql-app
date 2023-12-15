import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MainPageGridAreas } from '../../../types/types';
import classes from './VarsHeaders.module.css';

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
        <IconButton aria-label="show content" onClick={toggleContentHandler}>
          {isContentOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
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
      </div>
    </section>
  );
}
