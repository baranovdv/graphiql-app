import { Outlet } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import FireBase from './components/FireBase/FireBase';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <ErrorBoundary>
      <FireBase>
        <main className="main">
          <Header />
          <Outlet />
          <Footer />
        </main>
      </FireBase>
    </ErrorBoundary>
  );
}

export default App;
