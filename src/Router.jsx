import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/main/App';
// import Profile from './Profile';
import ErrorPage from './ErrorPage';
import Homepage from './components/main/Homepage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <App>
          <Homepage />
        </App>
      ),
      errorElement: <ErrorPage />,
    },
    {
      // path: 'profile/:name',
      // element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
