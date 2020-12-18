import { LOGIN_ROUTE_NAME } from '@/_constants/routes';

export default {
  name: LOGIN_ROUTE_NAME,
  path: '/login',
  loadAction: () => import('./index'),
};
