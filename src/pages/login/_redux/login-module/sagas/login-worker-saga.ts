import { put, call } from 'redux-saga/effects';
import { batchActions } from 'redux-batched-actions';
import { setModalAction } from '@wildberries/notifications';
import { LoginFormValuesType } from '@/pages/login/_types';
import { loginRequest } from '@/api/requests/login';
import {
  removeExternalErrorsLoginFormAction,
  setExternalErrorsLoginFormAction,
  setLoginFormStartLoadingAction,
  setLoginFormStopLoadingAction,
} from '../actions';
import { getFilteredFormErrors } from './_utils/get-filtered-form-errors';

export function* loginWorkerSaga(formValues: LoginFormValuesType) {
  try {
    yield put(
      batchActions([
        removeExternalErrorsLoginFormAction(),
        setLoginFormStartLoadingAction(),
      ]),
    );

    const { error, errorText, additionalErrors } = yield call(
      loginRequest,
      formValues,
    );

    const filteredFormErrors = getFilteredFormErrors(additionalErrors);

    if (error) {
      if (Boolean(filteredFormErrors)) {
        yield put(setExternalErrorsLoginFormAction(filteredFormErrors));
      }

      throw new Error(errorText);
    }

    yield put(
      batchActions([
        setModalAction({
          status: 'success',
          title: 'Вы залогинились!',
        }),
        setLoginFormStopLoadingAction(),
      ]),
    );
  } catch (error) {
    yield put(
      batchActions([
        setModalAction({
          status: 'error',
          title: 'Вы не залогинились!',
          text: `Причина: ${error.message}`,
        }),
        setLoginFormStopLoadingAction(),
      ]),
    );
  }
}
