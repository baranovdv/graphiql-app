import { useLayoutEffect, useRef, KeyboardEvent } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setInput, setResponse } from '../../../store/reducers/mainPageSlice';
import { MainPageGridAreas } from '../../../types/types';
import classes from './EditorView.module.css';

export default function EditorView({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.mainPage.input);
  const response = useAppSelector((state) => state.mainPage.response);
  if (gridAreaProp === 'editor') {
    SyntaxHighlighter.registerLanguage('json', json);
  } else {
    SyntaxHighlighter.registerLanguage('graphql', graphql);
  }

  function formatResponse(text: string) {
    let formattedResponse = '';
    let indent = 0;
    if (text) {
      for (let i = 0; i < text.length; i += 1) {
        const char = text[i];
        if (char === '{' || char === '[') {
          if (i !== 0) {
            formattedResponse += `\n${'  '.repeat(
              indent
            )}${char}\n${'  '.repeat((indent += 1))}`;
          } else {
            formattedResponse += `${'  '.repeat(indent)}${char}\n${'  '.repeat(
              (indent += 1)
            )}`;
          }
        } else if (char === '}' || char === ']') {
          formattedResponse += `\n${'  '.repeat((indent -= 1))}${char}`;
        } else if (char === ',') {
          formattedResponse += `,\n${'  '.repeat(indent)}`;
        } else {
          formattedResponse += char;
        }
      }
    }
    return formattedResponse;
  }

  function adjustHeight() {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      let maxWidth = 300;
      const lines = textareaRef.current.value.split('\\n');
      lines.forEach((line) => {
        const el = document.createElement('span');
        el.style.whiteSpace = 'pre';
        el.textContent = line;
        document.body.appendChild(el);
        const { width } = el.getBoundingClientRect();
        if (width > maxWidth) {
          maxWidth = width;
        }
        document.body.removeChild(el);
      });

      textareaRef.current.style.width = `${maxWidth + 300}px`;
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    adjustHeight();
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  }

  const language = gridAreaProp === 'editor' ? 'graphql' : 'json';

  useLayoutEffect(() => {
    adjustHeight();
  }, [input, response]);
  return (
    <section
      className={classes.section}
      style={{
        gridArea: gridAreaProp,
      }}
    >
      <pre className={classes.pre}>
        <SyntaxHighlighter
          language={language}
          showLineNumbers
          style={{
            ...prism,
            'react-syntax-highlighter-line-number': {
              minWidth: '2.25em',
            },
            hljs: {
              ...prism.hljs,
              background: 'transparent',
            },
          }}
        >
          {gridAreaProp === 'editor' ? input : formatResponse(response)}
        </SyntaxHighlighter>
      </pre>
      <textarea
        ref={textareaRef}
        className={classes.textarea}
        id="ev"
        name="ev"
        rows={10}
        readOnly={gridAreaProp !== 'editor'}
        onChange={(e) => {
          if (gridAreaProp === 'editor') {
            dispatch(setInput(e.target.value));
          } else {
            dispatch(setResponse(e.target.value));
          }
        }}
        onKeyDown={handleKeyDown}
        value={gridAreaProp === 'editor' ? input : formatResponse(response)}
      />
    </section>
  );
}
