import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import WelcomePage from '../pages/WelcomePage';
import SignInPage from '../pages/SignInPage';
import Page404 from '../pages/404Page';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: 'SignIn',
        element: <SignInPage />,
      },
      {
        path: 'MainPage',
        element: <PrivateRoute />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
