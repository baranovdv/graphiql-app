/* eslint-disable react/require-default-props */
import { Button } from '@mui/material';
import { setSearchName } from '../../../store/reducers/docsSlice';
import { useAppDispatch } from '../../../store/store';
import { BtnBGColors } from '../../../types/types';

interface ItemLinkProps {
  type: string;
  title?: string;
  color?: BtnBGColors;
}

export default function ItemLink({
  type,
  title = '',
  color = 'blue',
}: ItemLinkProps) {
  const dispatch = useAppDispatch();

  const itemLinkHandler = () => dispatch(setSearchName(type));

  return (
    <>
      {title && <b>{`${title}: `}</b>}
      <Button
        onClick={itemLinkHandler}
        size="small"
        sx={{
          minWidth: '0px',
          justifyContent: 'start',
          textTransform: 'none',
          backgroundColor: { color },
          paddingBottom: '2px',
          paddingTop: '2px',
        }}
      >
        {type}
      </Button>
    </>
  );
}
