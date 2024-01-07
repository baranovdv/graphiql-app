import { IntrospectionObjectType } from 'graphql';
import { ParsedIntrospectionType } from '../../interfaces/interfaces';

export default function parseItems(
  item: ParsedIntrospectionType
): ParsedIntrospectionType[] {
  if (item.kind === 'SCALAR') return [item];

  if (item.kind === 'OBJECT') {
    return (item as IntrospectionObjectType)
      .fields as ParsedIntrospectionType[];
  }

  if (item.kind === 'INPUT_OBJECT') {
    return item.inputFields as unknown as ParsedIntrospectionType[];
  }

  return [item];
}
