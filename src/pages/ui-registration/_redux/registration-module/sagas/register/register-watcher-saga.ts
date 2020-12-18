import { take, fork } from 'redux-saga/effects';
import { RegistrationFormDataType } from '../../../../page/_components/connected-registration-form/_types';
import { REGISTER_ACTION } from '../../actions';
import { registerWorkerSaga } from './register-worker-saga';

export const REGISTER_SAGA_NAME = 'REGISTER_SAGA_NAME';
export function* registerWatcherSaga() {
  while (true) {
    const { payload }: { payload: RegistrationFormDataType } = yield take(
      REGISTER_ACTION,
    );
    yield fork(registerWorkerSaga, payload);
  }
}
