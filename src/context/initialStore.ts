import STRINGS_LOCALE from '../data/locales/locales';
import { Store } from '../interfaces/interfaces';
import { AppLanguages } from '../types/types';

const DEFAULT_LANGUAGE: AppLanguages = 'Ру';

const currentLanguageInit: AppLanguages =
  (localStorage.getItem('currentLanguage') as AppLanguages) || DEFAULT_LANGUAGE;

const initialStore: Store = {
  currentLanguage: currentLanguageInit,
  strings: STRINGS_LOCALE[currentLanguageInit],
};

export default initialStore;
