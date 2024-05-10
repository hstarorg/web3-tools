import { NavigateOptions, Outlet, To, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { routerEventBus } from '@/router';

export function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    function hanldeRouteChange(to: To, options: NavigateOptions | undefined) {
      console.log('navigate', to, options);
      navigate(to, options);
    }
    routerEventBus.on(routerEventBus.RouteNavigateEvent!, hanldeRouteChange);
    return () => {
      routerEventBus.off(routerEventBus.RouteNavigateEvent!, hanldeRouteChange);
    };
  }, [navigate]);

  return <Outlet />;
}
