import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import App from './components/main/App';
import ErrorPage from './ErrorPage';
import Homepage from './components/main/Homepage';
import Shop from './components/main/Shop';
import Shopping from './components/main/Shopping';
import Checkout from './components/main/Checkout';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to="home" /> },
        { path: 'home', element: <Homepage />, errorElement: <ErrorPage /> },
        {
          path: 'shopping',
          element: <Shopping />,
          errorElement: <ErrorPage />,
          children: [
            { path: 'shop', element: <Shop />, errorElement: <ErrorPage /> },
            {
              path: 'checkout',
              element: <Checkout />,
              errorElement: <ErrorPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
