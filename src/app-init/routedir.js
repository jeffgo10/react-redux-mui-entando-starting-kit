import { routerConfig } from '@entando/router';

import store from 'state/store';

export const ROUTE_HOME = 'home';
export const ROUTE_ABOUT = 'about';
export const ROUTE_GALLERY = 'gallery';

routerConfig(
  store,
  {
    mode: 'browser',
    routes: [
      { name: ROUTE_HOME, path: '/' },
      { name: ROUTE_ABOUT, path: '/about' },
      { name: ROUTE_HOME, path: '/gallery' },
    ],
    notFoundRoute: { name: 'notFound', path: '/404' },
  },
);
