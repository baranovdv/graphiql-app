import { ItemType2 } from '../../interfaces/interfaces';
import getSubType from './getSubTypes';

export default function getType(item: ItemType2): string {
  if (item.type?.kind === 'LIST' || item.type?.kind === 'NON_NULL') {
    return getSubType(item.type?.ofType);
  }
  if (item.kind === 'SCALAR' || item.kind === 'ENUM') return item.name;

  if (item.type?.kind === 'SCALAR' || item.type?.kind === 'OBJECT')
    return item.type.name;

  return item.type?.kind || 'noType';
}
