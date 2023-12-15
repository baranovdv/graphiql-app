import classes from './Aside.module.css';

export default function Aside({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={`${classes.aside} ${isOpen && classes.open}`}>Docs</aside>
  );
}
