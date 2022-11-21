import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import JobPage from './Pages/JobPage';

import Root from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'jobs/:jobId',
        element: <JobPage />,
      },
    ],
  },
]);
