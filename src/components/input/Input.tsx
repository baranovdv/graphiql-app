import { HTMLProps } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Client } from '../../types/types';
import classes from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  register: UseFormRegister<Client>;
}

export default function Input({ id, register, ...props }: InputProps) {
  return (
    <input
      className={classes.input}
      id={id}
      {...register(id as keyof Client)}
      {...props}
    />
  );
}
