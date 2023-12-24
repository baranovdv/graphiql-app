/* eslint-disable @typescript-eslint/dot-notation */
import { useEffect } from 'react';
import { buildClientSchema, printSchema } from 'graphql';
import { useAppDispatch, useAppSelector } from '../../store/store';
import classes from './Aside.module.css';
import { useLazyGetSchemaQuery } from '../../store/api/api';
import { setDocs } from '../../store/reducers/mainPageSlice';
import getTypesFromIntrospection from '../../utils/getTypesFromIntrospection';
import Docs from '../Docs/Docs';

export default function Aside({ isOpen }: { isOpen: boolean }) {
  const url = useAppSelector((state) => state.mainPage.url);
  const dispatch = useAppDispatch();
  const [triggerfn] = useLazyGetSchemaQuery();
  const DocsHandler = async () => {
    try {
      const response = await triggerfn(url);
      if (!response.data) throw new Error();

      const schema = printSchema(buildClientSchema(response.data));

      console.log(schema);

      const docsData = getTypesFromIntrospection(response.data);

      dispatch(setDocs(docsData));
    } catch (error) {
      if (error instanceof Error) setDocs(error.message);
    }
  };
  useEffect(() => {
    DocsHandler();
  }, [url]);

  return (
    <aside className={`${classes.aside} ${isOpen && classes.open}`}>
      <Docs />
    </aside>
  );
}
