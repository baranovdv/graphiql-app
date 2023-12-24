/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button } from '@mui/material';
import { ItemType2 } from '../../../interfaces/interfaces';

interface DocsItemProps {
  item: ItemType2;
  onClick: (item: ItemType2) => void;
  isUpperLevel: boolean;
}

export default function DocsItem({
  item,
  onClick,
  isUpperLevel,
}: DocsItemProps) {
  return (
    <li>
      <div>
        <Button
          type="button"
          size="small"
          sx={{
            paddingRight: '8px',
            justifyContent: 'start',
            minWidth: '0',
            textTransform: 'none',
          }}
          disabled={
            (!isUpperLevel && item.kind === 'SCALAR') ||
            (!isUpperLevel && item.type?.kind === 'SCALAR')
          }
          onClick={() => onClick(item)}
        >
          {`${item.name}${!item.kind ? `: ${item.type?.name}` : ''}`}
        </Button>
        <div>
          {(!item.kind && item.description) ||
            (!isUpperLevel && item.kind === 'SCALAR' && item.description)}
        </div>
      </div>
    </li>
  );
}
