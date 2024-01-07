import { ParsedIntrospectionType } from '../../../interfaces/interfaces';
import RootItem from '../RootItem/RootItem';
import classes from './RootType.module.css';

interface RootTypeProps {
  name: string;
  fields: ParsedIntrospectionType[];
}

export default function RootType({ name, fields }: RootTypeProps) {
  return (
    <>
      <h3 className={classes.title}>{name}</h3>
      {fields.map((item) => (
        <RootItem item={item} key={item.name} />
      ))}
    </>
  );
}
