import { Outlet } from 'react-router-dom';
import './App.css';
import styles from './styles/main.module.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <main className={styles.mainBlock}>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </main>
  );
}

export default App;
