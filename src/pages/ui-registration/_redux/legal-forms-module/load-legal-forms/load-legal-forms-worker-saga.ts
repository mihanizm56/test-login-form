import { put, call } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import i18next from 'i18next';
import { batchActions } from 'redux-batched-actions';
import { listLegalFormsRequest } from '@/api/requests/list-legal-forms';
import { pageSubNamespace } from '@/pages/ui-registration/_constants/page-sub-namespace';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { resetLegalFormsAction, setLegalFormsAction } from '../actions';
import {
  resetRegistrationFormDataAction,
  setRegistrationFormLoadingStartAction,
  setRegistrationFormLoadingStopAction,
} from '../../registration-form-module';

export function* loadLegalFormsWorkerSaga(countryID: string) {
  yield put(setRegistrationFormLoadingStartAction());

  try {
    const { data, error, errorText } = yield call(
      listLegalFormsRequest,
      countryID,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(setLegalFormsAction(data.legalForms));
  } catch (error) {
    yield put(
      batchActions([
        resetRegistrationFormDataAction(),
        resetLegalFormsAction(),
        setModalAction({
          status: 'error',
          title: i18next.t(
            `${appNamespace}:${pageSubNamespace}.legal-forms-loading-failed`,
          ),
          text: error.message,
        }),
      ]),
    );
  } finally {
    yield put(setRegistrationFormLoadingStopAction());
  }
}
