/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment, useState } from 'react';
import { ParsedIntrospectionType } from '../../../interfaces/interfaces';
import getArgType from '../../../utils/docsUtils/getArgType';
import getReturnType from '../../../utils/docsUtils/getReturnType';
import ItemLink from '../ItemLink/ItemLink';
import classes from './RootItem.module.css';

interface RootItemProps {
  item: ParsedIntrospectionType;
}

export default function RootItem({ item }: RootItemProps) {
  const [isShowDescription, setIsShowDescription] = useState(false);

  const toggleDescHandler = () => setIsShowDescription(!isShowDescription);

  return (
    <div className={classes.item} key={item.name}>
      {item.name}
      {item.description && (
        <span className={classes.descriptionLink} onClick={toggleDescHandler}>
          {` [?] `}
        </span>
      )}
      (
      {item.args?.map((arg, index, array) => (
        <Fragment key={arg.name}>
          <ItemLink type={getArgType(arg)} title={arg.name} />
          {array.length > 1 && index < array.length - 1 && ', '}
        </Fragment>
      ))}
      ):&nbsp;
      <ItemLink type={getReturnType(item)} color="orange" />
      {isShowDescription && (
        <div className={classes.description}>{item.description}</div>
      )}
      <hr className={classes.hr} />
    </div>
  );
}
