import { LOGIN_ROUTE_NAME } from '@/_constants/routes';

export default {
  name: LOGIN_ROUTE_NAME,
  path: '/test-login-form',
  loadAction: () => import('./index'),
};
