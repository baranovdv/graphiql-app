import { AppLanguages, LocaleData } from '../../types/types';
import enStrings from './en';
import ruStrings from './ru';

const STRINGS_LOCALE: Record<AppLanguages, LocaleData> = {
  en: enStrings,
  ru: ruStrings,
};

export default STRINGS_LOCALE;
