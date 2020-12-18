/* eslint-disable @typescript-eslint/camelcase */
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

// be careful - this saga is re-used in case getting new code
// if you will need to make more logic - split it with that into two different sagas
export function* loginWorkerSaga(formValues: LoginFormValuesType) {
  try {
    yield put(
      batchActions([
        removeExternalErrorsLoginFormAction(),
        setLoginFormStartLoadingAction(),
      ]),
    );

    // yield call(sleep, 2000);

    const { error, errorText, additionalErrors } = yield call(
      loginRequest,
      formValues,
    );

    if (error) {
      if (Boolean(additionalErrors)) {
        setExternalErrorsLoginFormAction(additionalErrors);
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
