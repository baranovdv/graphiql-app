import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import { MainPageGridAreas } from '../../../types/types';
import classes from './EditorView.module.css';

export default function EditorView({
  gridAreaProp,
}: {
  gridAreaProp: MainPageGridAreas;
}) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  SyntaxHighlighter.registerLanguage('graphql', graphql);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener('input', () => {
        if (textareaRef.current) {
          setText(textareaRef.current.value);
        }
      });
    }
  }, []);

  function adjustHeight() {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }

  useLayoutEffect(adjustHeight, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    adjustHeight();
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  }

  return (
    <section
      className={classes.section}
      style={{
        gridArea: gridAreaProp,
      }}
    >
      <pre className={classes.pre}>
        <SyntaxHighlighter
          language="graphql"
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
          {text}
        </SyntaxHighlighter>
      </pre>
      <textarea
        ref={textareaRef}
        className={classes.textarea}
        id="ev"
        name="ev"
        cols={100}
        defaultValue=""
        onKeyDown={handleKeyDown}
      />
    </section>
  );
}
