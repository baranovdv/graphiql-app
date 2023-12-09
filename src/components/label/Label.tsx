import { HTMLProps } from 'react';

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  htmlFor: string;
}

export default function Label({ children, htmlFor, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}
