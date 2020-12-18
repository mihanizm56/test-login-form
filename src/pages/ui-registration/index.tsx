import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { MobileHeaderLayout } from '@/_layouts/mobile-header-layout';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';
import { pageSubNamespace } from './_constants/page-sub-namespace';

const pageNode = 'ui-registration';

const action: IAction = async ({ fromState, toState }) => ({
  title: `${appNamespace}:${pageSubNamespace}.page-title`,
  content: (
    <ReduxStoreLoader
      fromState={fromState}
      storeInjectConfig={storeInjectConfig(toState.name)}
      toState={toState}
      withoutRemovingReducers
    >
      <MobileHeaderLayout>
        <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
      </MobileHeaderLayout>
    </ReduxStoreLoader>
  ),
});

export default action;
