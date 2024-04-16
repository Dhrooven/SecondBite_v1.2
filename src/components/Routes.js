// routes.js
import SignUp from '../pages/SignUp';
import SignUp2 from '../pages/SignUp2';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup2',
    element: <SignUp2 />,
    errorElement: <ErrorPage />,
  },
]);
