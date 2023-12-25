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
import { useLazyGetSchemaQuery } from '../../store/api/api';
import getTypesFromIntrospection from '../../utils/getTypesFromIntrospection';
import parseSearchItemName from '../../utils/docsUtils/parseSearchItemName';

const UPPER_LEVEL_NAME = 'Docs';
const ROOT_TYPES = ['Query', 'Mutation'];

export default function Docs() {
  const searchItemName = useAppSelector(selectSearchItemName);
  const url = useAppSelector((state) => state.mainPage.url);
  const [triggerfn] = useLazyGetSchemaQuery();

  const dispatch = useAppDispatch();

  let isDocsValid: boolean = true;

  const rootTypes: RootTypesType[] = [];

  const [initList, setInitList] = useState<IntrospectionType[]>([]);
  const [itemsList, setItemsList] = useState<ItemType2[]>([]);

  const lastItemsList = useRef<ItemType2[][]>([]);
  const levelName = useRef<string[]>([UPPER_LEVEL_NAME]);

  const DocsHandler = async () => {
    try {
      const response = await triggerfn(url);
      if (!response.data) throw new Error();

      const parsedTypesToString = getTypesFromIntrospection(response.data);

      isDocsValid = isJSONParse(parsedTypesToString);

      const parsedItemsFromString = isDocsValid
        ? (JSON.parse(parsedTypesToString) as IntrospectionType[])
        : [];

      setInitList(parsedItemsFromString);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

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

  useEffect(() => {
    DocsHandler();
  }, [url]);

  useEffect(() => {
    const parsedSearchItemName = parseSearchItemName(searchItemName);

    const findedItem = initList.find(
      (item) => item.name === parsedSearchItemName
    );

    if (!findedItem) return;

    const parsedItems = parseItems(findedItem);

    updateItemsList(parsedItems, findedItem?.name || 'notFound');

    return () => {
      dispatch(setSearchName(''));
    };
  }, [searchItemName]);

  if (initList.length === 0) return <div>Loading...</div>;

  if (!isDocsValid) return <div>Error Data</div>;

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
