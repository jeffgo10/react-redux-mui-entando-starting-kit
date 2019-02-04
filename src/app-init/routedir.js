import { routerConfig } from '@entando/router';

import store from 'state/store';

export const ROUTE_HOME = 'home';
export const ROUTE_ABOUT = 'about';
export const ROUTE_GALLERY = 'gallery';
export const ROUTE_404 = 'notFound';

export const routes = [
  { name: ROUTE_HOME, path: '/' },
  { name: ROUTE_ABOUT, path: '/about' },
  { name: ROUTE_HOME, path: '/gallery' },
];

export const matchRoute = (theRoutes, url) => {
  for (let i = 0; i < theRoutes.length; i += 1) {
    const route = theRoutes[i];
    const match = route.re.exec(url);
    if (match) {
      const params = {};
      for (let j = 0; j < route.keys.length; j += 1) {
        params[route.keys[j].name] = match[j + 1];
      }
      return { route, params };
    }
  }
  return null;
};


routerConfig(
  store,
  {
    mode: 'browser',
    routes,
    notFoundRoute: { name: ROUTE_404, path: '/404' },
  },
);
