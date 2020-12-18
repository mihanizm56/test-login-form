import { take, fork } from 'redux-saga/effects';
import { LoginFormValuesType } from '@/pages/login/_types';
import { LOGIN_ACTION_SAGA } from '../actions';
import { loginWorkerSaga } from './login-worker-saga';

export const LOGIN_SAGA_NAME = 'LOGIN_SAGA_NAME';

export function* loginWatcherSaga() {
  while (true) {
    const { payload }: { payload: LoginFormValuesType } = yield take(
      LOGIN_ACTION_SAGA,
    );

    yield fork(loginWorkerSaga, payload);
  }
}
