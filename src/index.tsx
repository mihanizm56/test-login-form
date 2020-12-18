import 'fast-text-encoding/text';
/* 
    if you need some polyfills and you are not in "rus" or "euro" version
    please insert below (package is included)
    import 'react-app-polyfill/stable';
*/

import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from '@wildberries/redux-core-modules';
import { configureRouter } from '@wildberries/service-router';
import { ABORT_REQUEST_EVENT_NAME } from '@mihanizm56/fetch-api';
import {
  notificationsState,
  NOTIFICATIONS_REDUCER_NAME,
  setModalAction,
} from '@wildberries/notifications';
import { routes } from '@/pages/routes';
import { App } from '@/_components/app';
import 'normalize.css';
import '@/styles/global.css';
import '@/styles/variables.module.scss';
import { LOGIN_ROUTE_NAME } from './_constants/routes';

const ROOT_ELEMENT = document.getElementById('root');

const router = configureRouter({
  defaultRoute: LOGIN_ROUTE_NAME,
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  enablei18nMiddleware: true,
});
const store = createAppStore({
  router,
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  rootReducers: {
    [NOTIFICATIONS_REDUCER_NAME]: notificationsState,
  },

  dependencies: { setModalAction },
});

router.setDependencies({
  store,
  routes,
});

router.add(routes);

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App router={router} />
    </Provider>,
    ROOT_ELEMENT,
  );
});
