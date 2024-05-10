import { NavigateOptions, To, createBrowserRouter } from 'react-router-dom';
import { EventEmitter } from 'events';

import { NotFound } from './pages/errors';
import { Layout } from './pages/Layout';
import { default as Home } from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
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

export const routerEventBus: EventEmitter & { RouteNavigateEvent?: string } =
  new EventEmitter();
routerEventBus.RouteNavigateEvent = 'RouteNavigateEvent';

export function navigateTo(to: To, options?: NavigateOptions) {
  routerEventBus.emit(routerEventBus.RouteNavigateEvent!, to, options);
}
