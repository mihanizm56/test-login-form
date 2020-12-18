import { put, call, select } from 'redux-saga/effects';
import { setModalAction } from '@wildberries/notifications';
import i18next from 'i18next';
import { loadInnInfoRequest } from '@/api/requests/load-inn-info';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { pageSubNamespace } from '@/pages/ui-registration/_constants/page-sub-namespace';
import {
  getInitialFormValuesSelector,
  setRegistrationFormDataAction,
  setRegistrationFormLoadingStartAction,
  setRegistrationFormLoadingStopAction,
} from '@/pages/ui-registration/_redux/registration-form-module';
import { RegistrationFormDataType } from '../../../../page/_components/connected-registration-form/_types';

export function* loadInnInfoWorkerSaga(formData: RegistrationFormDataType) {
  const initialFormValues = yield select(getInitialFormValuesSelector);

  if (initialFormValues.inn === formData.inn) {
    return;
  }

  yield put(setRegistrationFormDataAction(formData));

  yield put(setRegistrationFormLoadingStartAction());

  try {
    const { data, error, errorText } = yield call(loadInnInfoRequest, {
      inn: formData.inn,
      legalFormID: formData.legalFormID,
    });

    if (error) {
      throw new Error(errorText);
    }

    yield put(setRegistrationFormDataAction({ ...formData, ...data.info }));
  } catch (error) {
    yield put(
      setModalAction({
        status: 'error',
        title: i18next.t(
          `${appNamespace}:${pageSubNamespace}.inn-loading-failed`,
        ),
        text: error.message,
      }),
    );
  } finally {
    yield put(setRegistrationFormLoadingStopAction());
  }
}
