import { ParsedIntrospectionType } from '../../interfaces/interfaces';
import getSubType from './getSubTypes';

export default function getType(item: ParsedIntrospectionType): string {
  if (item.type?.kind === 'LIST' || item.type?.kind === 'NON_NULL') {
    return getSubType(item.type?.ofType);
  }
  if (item.kind === 'SCALAR' || item.kind === 'ENUM') return item.name;

  if (
    item.type?.kind === 'SCALAR' ||
    item.type?.kind === 'OBJECT' ||
    item.type?.kind === 'ENUM' ||
    (item.type as ParsedIntrospectionType).kind === 'INPUT_OBJECT'
  )
    return item.type?.name || 'noType';

  return item.type?.kind || 'noType';
}
