import { createContext, useContext, useReducer } from 'react';
import { Action, Store } from '../interfaces/interfaces';
import initialStore from './initialStore';
import storeReducer from './storeReducer';

const CONTEXT_ERROR = 'Context must be used inside Provider';
const LocaleContext = createContext<Store | null>(null);
const LocaleDispatchContext = createContext<React.Dispatch<Action> | null>(
  null
);

function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <LocaleContext.Provider value={store}>
      <LocaleDispatchContext.Provider value={dispatch}>
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleContext.Provider>
  );
}

const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw Error(CONTEXT_ERROR);
  }
  return context;
};

const useLocaleDispatch = () => {
  const context = useContext(LocaleDispatchContext);
  if (!context) {
    throw Error(CONTEXT_ERROR);
  }
  return context;
};

export { LocaleProvider, useLocale, useLocaleDispatch, LocaleContext };
