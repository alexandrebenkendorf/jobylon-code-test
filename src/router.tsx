import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import Root from './pages/Root';

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
