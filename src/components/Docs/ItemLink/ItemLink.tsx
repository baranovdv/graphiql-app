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

  return (
    <>
      {title && <b>{`${title}: `}</b>}
      <Button
        onClick={() => dispatch(setSearchName(type))}
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
