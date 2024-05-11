import { createBrowserRouter } from 'react-router-dom';

import { NotFound } from './pages/errors';
import { Layout } from './pages/Layout';
import { ToolsLayout } from './pages/tools/Layout';
import { HomePage } from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tools', element: <ToolsLayout /> },
      //   {
      //     path: '/',
      //     element: <MainLayout />,
      //     children: [
      //       { path: '/', element: <MainPage /> },
      //       { path: '/kbs', element: <KbsPage /> },
      //       { path: '/apps', element: <AppsPage /> },
      //     ],
      //   },
    ],
  },
]);
