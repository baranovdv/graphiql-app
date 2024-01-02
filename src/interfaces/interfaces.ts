/* v8 ignore start */
import { IntrospectionField, IntrospectionInputValue } from 'graphql';
import { ActionType, AppLanguages, LocaleData } from '../types/types';

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

export interface Client {
  username: string;
  email: string;
  firstPassword: string;
  secondPassword: string;
}

export interface Store {
  currentLanguage: AppLanguages;
  strings: LocaleData;
}

export interface Action {
  type: ActionType;
  payload: AppLanguages;
}

export interface TeamMemberCardProps {
  id: number;
  name: Record<AppLanguages, string>;
  img: string;
  bio: Record<AppLanguages, string>;
  github: string;
}

type KindTypes =
  | 'SCALAR'
  | 'OBJECT'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'LIST'
  | 'NON_NULL';

export interface ItemType2 extends Partial<IntrospectionField> {
  kind?: KindTypes;
  name: string;
  fields?: ReadonlyArray<IntrospectionField>;
  inputFields?: ReadonlyArray<IntrospectionInputValue>;
}

export type RootTypesType = {
  name: string;
  fields: ItemType2[];
};
/* v8 ignore stop */
