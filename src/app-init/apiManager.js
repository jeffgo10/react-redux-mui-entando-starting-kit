import { config, setApi } from '@entando/apimanager';
import { ROUTE_HOME } from './routedir';


const configApiManager = {
  domain: null, // process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://be-datafied.entando.com' // eslint-disable-line
  useMocks: false,
};

export default (store) => {
  config(store, ROUTE_HOME, ROUTE_HOME);
  store.dispatch(setApi(configApiManager));
};
