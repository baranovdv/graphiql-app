import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignInPage from '../pages/SignInPage';
import Page404 from '../pages/404Page';
import PrivateRoute from './PrivateRoute';
import Welcome from '../pages/Welcome';
import SignUpPage from '../pages/SignUpPage';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: 'SignIn',
        element: <SignInPage />,
      },
      {
        path: 'SignUp',
        element: <SignUpPage />,
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
export { routes };
