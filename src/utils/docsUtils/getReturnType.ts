import { ParsedIntrospectionType } from '../../interfaces/interfaces';
import getSubType from './getSubTypes';

export default function getReturnType(item: ParsedIntrospectionType): string {
  if (item.type?.kind === 'SCALAR' || item.type?.kind === 'OBJECT')
    return item.type?.name;

  if (item.type?.kind === 'LIST' || item.type?.kind === 'NON_NULL') {
    return `[${getSubType(item.type?.ofType)}]`;
  }

  return item.type?.kind || 'noType';
}
