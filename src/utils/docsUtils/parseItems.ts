import { IntrospectionObjectType } from 'graphql';
import { ItemType2 } from '../../interfaces/interfaces';

export default function parseItems(item: ItemType2): ItemType2[] {
  if (item.kind === 'SCALAR') return [item];

  if (item.kind === 'OBJECT') {
    return (item as IntrospectionObjectType).fields as ItemType2[];
  }

  if (item.kind === 'INPUT_OBJECT') {
    return item.inputFields as unknown as ItemType2[];
  }

  return [item];
}
