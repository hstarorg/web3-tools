import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary, NotFound } from './pages/errors';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/Home';

import { ToolsLayout } from './pages/tools/Layout';
import { ToolsHome } from './pages/tools/ToolsHome';
import { ExchangeTools } from './pages/tools/ExchangeTools';
import { EvmDevTools } from './pages/tools/EvmDevTools';
import { SolanaToken } from './pages/tools/SolanaToken';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/tools',
        element: <ToolsLayout />,
        children: [
          { path: '/tools', element: <ToolsHome /> },
          { path: '/tools/exchange', element: <ExchangeTools /> },
          { path: '/tools/evmdev', element: <EvmDevTools /> },
          { path: '/tools/solana-token', element: <SolanaToken /> },
          { path: '*', element: <NotFound /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
