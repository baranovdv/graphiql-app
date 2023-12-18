import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import classes from './Aside.module.css';
import { useLazyGetSchemaQuery } from '../../store/api/api';
import { setDocs } from '../../store/reducers/mainPageSlice';

export default function Aside({ isOpen }: { isOpen: boolean }) {
  const docs = useAppSelector((state) => state.mainPage.docs);
  const url = useAppSelector((state) => state.mainPage.url);
  const dispatch = useAppDispatch();
  const [triggerfn] = useLazyGetSchemaQuery();
  const DocsHandler = async () => {
    try {
      const response = await triggerfn(url);
      dispatch(setDocs(JSON.stringify(response.data)));
    } catch (error) {
      if (error instanceof Error) setDocs(error.message);
    }
  };
  useEffect(() => {
    DocsHandler();
  }, [url, docs]);

  return (
    <aside className={`${classes.aside} ${isOpen && classes.open}`}>
      {docs}
    </aside>
  );
}
