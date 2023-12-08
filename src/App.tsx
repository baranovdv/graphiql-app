import { Outlet } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ErrorBoundary>
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
