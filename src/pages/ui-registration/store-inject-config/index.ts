import { StoreInjectConfig } from '@wildberries/redux-core-modules';
import { getLocale } from '@wildberries/i18next-utils';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
  startSupplierPageLoadingAction,
  stopSupplierPageLoadingAction,
} from '@/_redux/ui-module';
import { countriesListRequest } from '@/api/requests/get-countries-list';
import registrationFormStorage, {
  MODULE_REDUCER_NAME as registrationFormModuleReducerName,
} from '../_redux/registration-form-module';
import legalFormsStorage, {
  MODULE_REDUCER_NAME as legalFormsModuleReducerName,
} from '../_redux/legal-forms-module';
import regionsStorage, {
  MODULE_REDUCER_NAME as regionsReducerName,
  setRegionsAction,
} from '../_redux/regions-module';
import { getCountriesListResponseFormatter } from '../_utils/get-countries-list-response-formatter';
import {
  loadInnInfoWatcherSaga,
  LOAD_INN_INFO_SAGA_NAME,
  registerWatcherSaga,
  REGISTER_SAGA_NAME,
} from '../_redux/registration-module';
import {
  loadLegalFormsWatcherSaga,
  LOAD_LEGAL_FORMS_SAGA_NAME,
} from '../_redux/legal-forms-module/load-legal-forms';

export const storeInjectConfig = (routeName: string): StoreInjectConfig => ({
  sagasToInject: [
    {
      name: REGISTER_SAGA_NAME,
      saga: registerWatcherSaga,
    },
    {
      name: LOAD_INN_INFO_SAGA_NAME,
      saga: loadInnInfoWatcherSaga,
    },
    {
      name: LOAD_LEGAL_FORMS_SAGA_NAME,
      saga: loadLegalFormsWatcherSaga,
    },
  ],
  reducersToInject: [
    {
      name: registrationFormModuleReducerName,
      reducer: registrationFormStorage,
    },
    {
      name: regionsReducerName,
      reducer: regionsStorage,
    },
    {
      name: reducerUIName,
      reducer: reducerUI,
    },
    {
      name: legalFormsModuleReducerName,
      reducer: legalFormsStorage,
    },
  ],
  initialLoadManagerConfig: {
    options: {
      // TODO REMOVE IT FROM UI_STATE TO THE LOCAL FORM STATE
      fullActionLoadingStart: startSupplierPageLoadingAction,
      fullActionLoadingStop: stopSupplierPageLoadingAction,
    },
    requestConfigList: [
      {
        request: () =>
          countriesListRequest({
            locale: getLocale(),
            abortRequestId: routeName,
          }),
        showErrorNotification: true,
        showSuccessNotification: false,
        responseDataFormatter: getCountriesListResponseFormatter,
        requestExtraDataHandlerOptions: [
          {
            fieldName: 'countries',
            action: setRegionsAction,
          },
        ],
      },
    ],
  },
});
