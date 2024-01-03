import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setInput, setResponse } from '../../../store/reducers/mainPageSlice';
import { MainPageGridAreas } from '../../../types/types';
import classes from './EditorView.module.css';
import prettifyViewer from '../../../utils/prettify/prettifyViewer';
import HLTextArea from '../HLTextArea/HLTextArea';
import prettifyEditor from '../../../utils/prettify/prettifyEditor';

export default function EditorView({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.mainPage.input);
  const response = useAppSelector((state) => state.mainPage.response);

  useEffect(() => {
    const prettifiedInput = prettifyEditor(input);

    dispatch(setInput(prettifiedInput));
  }, []);

  return (
    <section
      className={classes.section}
      style={{
        gridArea: gridAreaProp,
      }}
    >
      <HLTextArea
        type={gridAreaProp}
        value={gridAreaProp === 'editor' ? input : prettifyViewer(response)}
        onChange={(e) => {
          if (gridAreaProp === 'editor') {
            dispatch(setInput(e.target.value));
          } else {
            dispatch(setResponse(e.target.value));
          }
        }}
        readonly={gridAreaProp !== 'editor'}
      />
    </section>
  );
}
