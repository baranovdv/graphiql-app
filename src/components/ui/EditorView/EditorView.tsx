import { MainPageGridAreas } from '../../../types/types';
import classes from './EditorView.module.css';

export default function EditorView({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  return (
    <section
      className={classes.section}
      style={{
        gridArea: gridAreaProp,
      }}
    >
      <textarea
        className={classes.textarea}
        id="ev"
        name="ev"
        rows={10}
        cols={30}
        defaultValue={`
        characters {
            results {
              id
              name
              status
            }
        }
      `}
      />
    </section>
  );
}
