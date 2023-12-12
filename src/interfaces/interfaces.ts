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
  currentLanguage: string;
  strings: LocaleData;
}

export interface Action {
  type: ActionType;
  payload: AppLanguages;
}
