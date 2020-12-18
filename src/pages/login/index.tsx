import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { LOGIN_ROUTE_NAME } from '@/_constants/routes';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = LOGIN_ROUTE_NAME;

const action: IAction = async ({ fromState, toState }) => ({
  title: 'Логин',
  content: (
    <ReduxStoreLoader
      fromState={fromState}
      storeInjectConfig={storeInjectConfig(toState.name)}
      toState={toState}
      withoutRemovingReducers
    >
      <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
    </ReduxStoreLoader>
  ),
});

export default action;
