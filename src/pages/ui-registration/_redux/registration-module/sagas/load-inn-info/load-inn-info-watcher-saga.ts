import { take, fork, delay, race } from 'redux-saga/effects';
import { RegistrationFormDataType } from '../../../../page/_components/connected-registration-form/_types';
import { LOAD_INN_INFO } from '../../actions';
import { loadInnInfoWorkerSaga } from './load-inn-info-worker-saga';

export const LOAD_INN_INFO_SAGA_NAME = 'LOAD_INN_INFO_SAGA_NAME';

const THROTTLE_TIMEOUT = 300;

export function* loadInnInfoWatcherSaga() {
  while (true) {
    let action: { payload: RegistrationFormDataType } = yield take(
      LOAD_INN_INFO,
    );

    while (true) {
      const { debounced, latestAction } = yield race({
        debounced: delay(THROTTLE_TIMEOUT),
        latestAction: take(LOAD_INN_INFO),
      });

      if (debounced) {
        yield fork(loadInnInfoWorkerSaga, action.payload);
        break;
      }

      action = latestAction;
    }
  }
}
