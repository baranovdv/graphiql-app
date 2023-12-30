/* eslint-disable @typescript-eslint/dot-notation */
import { IntrospectionQuery, IntrospectionType } from 'graphql';

export default function getTypesFromIntrospection(
  introspection: IntrospectionQuery
): string {
  const introspectionTypes = introspection['__schema'].types;

  const validIntrospectionTypes: IntrospectionType[] =
    introspectionTypes.reduce((acc: IntrospectionType[], item) => {
      if (item.name.slice(0, 2) === '__') return acc;
      acc.push(item);
      return acc;
    }, []);

  return JSON.stringify(validIntrospectionTypes);
}
