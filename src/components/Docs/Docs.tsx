/* eslint-disable consistent-return */
import { Button } from '@mui/material';
import { IntrospectionObjectType, IntrospectionType } from 'graphql';
import { useEffect, useRef, useState } from 'react';
import { ItemType2, RootTypesType } from '../../interfaces/interfaces';
import {
  selectSearchItemName,
  useAppDispatch,
  useAppSelector,
} from '../../store/store';
import isJSONParse from '../../utils/isJSONParse';
import RootType from './RootType/RootType';
import classes from './Docs.module.css';
import { setSearchName } from '../../store/reducers/docsSlice';
import parseItems from '../../utils/docsUtils/parseItems';
import ItemLink from './ItemLink/ItemLink';
import getType from '../../utils/docsUtils/getType';

const UPPER_LEVEL_NAME = 'Docs';
const ROOT_TYPES = ['Query', 'Mutation'];

export default function Docs() {
  const docsString: string = useAppSelector((state) => state.mainPage.docs);
  const searchItemName = useAppSelector(selectSearchItemName);

  const dispatch = useAppDispatch();

  const isDocsValid: boolean = isJSONParse(docsString);

  const initList = isDocsValid
    ? (JSON.parse(docsString) as IntrospectionType[])
    : [];

  const rootTypes: RootTypesType[] = [];

  const [itemsList, setItemsList] = useState<ItemType2[]>([]);

  const lastItemsList = useRef<ItemType2[][]>([]);
  const levelName = useRef<string[]>([UPPER_LEVEL_NAME]);

  const updateItemsList = (newItemsList: ItemType2[], itemName: string) => {
    lastItemsList.current.push(itemsList);
    levelName.current.push(itemName);

    setItemsList(newItemsList);
  };

  const breadcrumbHandler = () => {
    setItemsList(lastItemsList.current.pop() || []);
    levelName.current.pop();
    if (levelName.current.length === 1) dispatch(setSearchName(''));
  };

  const getRootTypes = () => {
    ROOT_TYPES.forEach((name) => {
      const rootItem = initList.find((intro) => intro.name === name);
      if (rootItem) {
        rootTypes.push({
          name: rootItem.name,
          fields: (rootItem as IntrospectionObjectType).fields as ItemType2[],
        });
      }
    });
  };

  // console.log(itemsList);

  useEffect(() => {
    const newList = isDocsValid
      ? (JSON.parse(docsString) as IntrospectionType[])
      : [];

    setItemsList(newList);
  }, [docsString]);

  useEffect(() => {
    const findedItem = initList.find((item) => item.name === searchItemName);

    if (!findedItem) return;

    console.log(findedItem);

    const parsedItems = parseItems(findedItem);

    updateItemsList(parsedItems, findedItem?.name || 'notFound');

    return () => {
      dispatch(setSearchName(''));
    };
  }, [searchItemName]);

  if (!isDocsValid) return <div>{docsString}</div>;

  getRootTypes();

  return (
    <div>
      {levelName.current[levelName.current.length - 1] !== UPPER_LEVEL_NAME ? (
        <div className={classes.itemsContainer}>
          <Button
            onClick={breadcrumbHandler}
            size="small"
            sx={{
              paddingRight: '8px',
              justifyContent: 'start',
              textTransform: 'none',
            }}
          >{`<--${levelName.current[levelName.current.length - 2]}`}</Button>
          <h4>{levelName.current[levelName.current.length - 1]}</h4>
          <ul className={classes.itemsList}>
            {itemsList.map((item) => {
              const parsedType = getType(item);

              return (
                <div key={item.name}>
                  <ItemLink type={parsedType} title={item.name} />
                  <div className={classes.description}>{item.description}</div>
                </div>
              );
            })}
          </ul>
        </div>
      ) : (
        rootTypes.map((item) => <RootType key={item.name} {...item} />)
      )}
    </div>
  );
}

// <DocsItem
//   key={item.name}
//   item={item}
//   isUpperLevel={
//     levelName.current[levelName.current.length - 1] ===
//     UPPER_LEVEL_NAME
//   }
//   onClick={dispatch(setSearchName(item.name))}
// />
