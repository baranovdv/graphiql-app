import STRINGS_LOCALE from '../data/locales/Locales';
import { Action, Store } from '../interfaces/interfaces';

export default function storeReducer(state: Store, action: Action): Store {
  switch (action.type) {
    case 'change_language': {
      return {
        ...state,
        currentLanguage: action.payload,
        strings: STRINGS_LOCALE[action.payload],
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
