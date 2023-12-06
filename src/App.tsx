import { Outlet } from 'react-router-dom';
import './App.css';
import styles from './styles/main.module.css';

function App() {
  return (
    <main className={styles.mainBlock}>
      <Outlet />
    </main>
  );
}

export default App;
