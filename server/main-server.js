import backendServer from './server.js';
import webpackServer from '../node_modules/webpack-dev-server/lib/Server';

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === 'production';

if(PROD) {
  backendServer(PORT);
} else {
  backendServer(PORT - 1);
  backendServer(PORT);
}
