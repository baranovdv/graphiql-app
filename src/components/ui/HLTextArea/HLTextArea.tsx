/* eslint-disable react/require-default-props */
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import { useLayoutEffect, useRef, KeyboardEvent } from 'react';
import classes from './HLTextArea.module.css';
import { HLTextAreaTypes } from '../../../types/types';

interface HLTextAreaProps {
  type: HLTextAreaTypes;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readonly?: boolean;
}

export default function HLTextArea({
  type,
  value,
  onChange,
  readonly = false,
}: HLTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  SyntaxHighlighter.registerLanguage('json', json);
  SyntaxHighlighter.registerLanguage('graphql', graphql);

  const language = type === 'editor' || type === 'vars' ? 'graphql' : 'json';

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

  useLayoutEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <>
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
          {value}
        </SyntaxHighlighter>
      </pre>
      <textarea
        ref={textareaRef}
        className={classes.textarea}
        id="ev"
        name="ev"
        rows={10}
        readOnly={readonly}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
    </>
  );
}
