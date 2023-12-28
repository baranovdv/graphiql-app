import { IntrospectionInputTypeRef, IntrospectionOutputTypeRef } from 'graphql';

export default function getSubType(
  item: IntrospectionInputTypeRef | IntrospectionOutputTypeRef
): string {
  if (
    item.kind === 'SCALAR' ||
    item.kind === 'OBJECT' ||
    item.kind === 'ENUM' ||
    item.kind === 'INPUT_OBJECT' ||
    item.kind === 'UNION'
  ) {
    return item.name;
  }
  if (item.kind === 'LIST' || item.kind === 'NON_NULL') {
    return getSubType(item.ofType);
  }
  return item.kind;
}
