import { setInput, setResponse } from '../../../store/reducers/mainPageSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { MainPageGridAreas } from '../../../types/types';
import classes from './EditorView.module.css';

export default function EditorView({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.mainPage.input);
  const response = useAppSelector((state) => state.mainPage.response);
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
        onChange={(e) => {
          if (gridAreaProp === 'editor') {
            dispatch(setInput(e.target.value));
          } else dispatch(setResponse(e.target.value));
        }}
        value={gridAreaProp === 'editor' ? input : response}
      />
    </section>
  );
}
