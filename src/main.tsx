import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router/router';
import { store } from './store/store';
import { LocaleProvider } from './context/StoreContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocaleProvider>
        <RouterProvider router={router} />
      </LocaleProvider>
    </Provider>
  </React.StrictMode>
);
