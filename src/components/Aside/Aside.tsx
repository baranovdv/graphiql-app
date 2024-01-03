import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { lazy, Suspense } from 'react';
import classes from './Aside.module.css';
import { useLocale } from '../../context/StoreContext';

interface AsideProps {
  isOpen: boolean;
  toggleDocs: () => void;
}

const Docs = lazy(() => import('../Docs/Docs'));

export default function Aside({ isOpen, toggleDocs }: AsideProps) {
  const closeButtonHandler = () => toggleDocs();

  const { strings } = useLocale();

  return (
    <aside className={`${classes.aside} ${isOpen && classes.open}`}>
      <IconButton
        sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
        aria-label="close"
        onClick={closeButtonHandler}
      >
        <CloseIcon />
      </IconButton>
      <Suspense fallback={<p>{strings.loading}</p>}>
        {isOpen && <Docs />}
      </Suspense>
    </aside>
  );
}
