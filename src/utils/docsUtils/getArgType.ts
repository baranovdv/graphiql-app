import { IntrospectionInputValue } from 'graphql';
import getSubType from './getSubTypes';

export default function getArgType(item: IntrospectionInputValue): string {
  if (item.type.kind === 'LIST' || item.type.kind === 'NON_NULL') {
    return getSubType(item.type.ofType);
  }
  if (
    item.type.kind === 'SCALAR' ||
    item.type.kind === 'INPUT_OBJECT' ||
    item.type.kind === 'ENUM'
  )
    return item.type.name;

  return item.type.kind || 'noType';
}
