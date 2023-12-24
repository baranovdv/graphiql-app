import { Outlet } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import FireBase from './components/FireBase/FireBase';

function App() {
  return (
    <ErrorBoundary>
      <FireBase>
        <Outlet />
      </FireBase>
    </ErrorBoundary>
  );
}

export default App;
