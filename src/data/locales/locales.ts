import { AppLanguages, LocaleData } from '../../types/types';
import enStrings from './en';
import ruStrings from './ru';

const STRINGS_LOCALE: Record<AppLanguages, LocaleData> = {
  En: enStrings,
  Ру: ruStrings,
};

export default STRINGS_LOCALE;
