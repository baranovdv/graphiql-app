import { HTMLProps } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../interfaces/interfaces';
import classes from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  register: UseFormRegister<Pick<Client, 'email' | 'firstPassword'>>;
}

export default function LoginInput({ id, register, ...props }: InputProps) {
  return (
    <input
      className={classes.input}
      id={id}
      {...register(id as keyof Pick<Client, 'email' | 'firstPassword'>)}
      {...props}
    />
  );
}
