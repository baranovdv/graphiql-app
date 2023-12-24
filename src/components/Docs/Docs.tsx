import { Button } from '@mui/material';
import { IntrospectionObjectType, IntrospectionType } from 'graphql';
import { useEffect, useRef, useState } from 'react';
import { ItemType2 } from '../../interfaces/interfaces';
import { useAppSelector } from '../../store/store';
import isJSONParse from '../../utils/isJSONParse';
import DocsItem from './DocsItem/DocsItem';

// interface DocsStore {
//   name: string;
//   itemsList: ItemType2[];
// }

const UPPER_LEVEL_NAME = 'Docs';

export default function Docs() {
  const docsString: string = useAppSelector((state) => state.mainPage.docs);

  const isDocsValid: boolean = isJSONParse(docsString);

  const initList = isDocsValid
    ? (JSON.parse(docsString) as IntrospectionType[])
    : [];

  const [itemsList, setItemsList] = useState<ItemType2[]>(initList);

  const lastItemsList = useRef<ItemType2[][]>([]);
  const levelName = useRef<string[]>([UPPER_LEVEL_NAME]);

  const updateItemsList = (newItemsList: ItemType2[], itemName: string) => {
    lastItemsList.current.push(itemsList);
    levelName.current.push(itemName);

    setItemsList(newItemsList);
  };

  const breadcrumbHandler = () => {
    setItemsList(lastItemsList.current.pop() || initList);
    levelName.current.pop();
  };

  console.log(itemsList);

  const itemClickHandler = (item: ItemType2) => {
    if (item.kind === 'OBJECT' && (item as IntrospectionObjectType).fields) {
      const { fields } = item as IntrospectionObjectType;
      updateItemsList(fields as ItemType2[], item.name);
    }
    if (item.kind === 'SCALAR' || item.type?.kind === 'SCALAR') {
      updateItemsList([item], item.name);
    }

    if (item.type?.kind === 'OBJECT') {
      const typeItem: ItemType2[] = initList.filter(
        (element) => element.name === item.type?.name
      );

      console.log(typeItem);

      if ((typeItem[0] as IntrospectionObjectType).fields) {
        const { fields } = typeItem[0] as IntrospectionObjectType;
        updateItemsList(fields as ItemType2[], typeItem[0].name);
        return;
      }

      console.log(typeItem);

      updateItemsList(typeItem, item.name);

      // if (item.type?.name) {
      //   console.log(
      //     initList.filter((element) => element.name === item.type?.name)
      //   );
      // }
    }
    // console.log(item);
  };

  // if (isDocsValid) {
  //   // docsParsed = JSON.parse(docsString) as IntrospectionType[];
  //   setItemsList(JSON.parse(docsString) as IntrospectionType[]);
  // }

  useEffect(() => {
    const newList = isDocsValid
      ? (JSON.parse(docsString) as IntrospectionType[])
      : [];

    setItemsList(newList);
  }, [docsString]);

  if (!isDocsValid) return <div>{docsString}</div>;

  return (
    <>
      {levelName.current[levelName.current.length - 1] !== UPPER_LEVEL_NAME && (
        <Button
          onClick={breadcrumbHandler}
          size="small"
          sx={{
            paddingRight: '8px',
            justifyContent: 'start',
            textTransform: 'none',
          }}
        >{`<--${levelName.current[levelName.current.length - 1]}`}</Button>
      )}
      <ul>
        {itemsList.map((item) => {
          return (
            <DocsItem
              key={item.name}
              item={item}
              isUpperLevel={
                levelName.current[levelName.current.length - 1] ===
                UPPER_LEVEL_NAME
              }
              onClick={itemClickHandler}
            />
          );
        })}
      </ul>
    </>
  );
}
