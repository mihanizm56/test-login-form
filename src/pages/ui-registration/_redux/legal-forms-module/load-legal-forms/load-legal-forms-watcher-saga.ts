import { take, fork } from 'redux-saga/effects';
import { LOAD_LEGAL_FORMS } from '../actions';
import { loadLegalFormsWorkerSaga } from './load-legal-forms-worker-saga';

export const LOAD_LEGAL_FORMS_SAGA_NAME = 'LOAD_LEGAL_FORMS_SAGA_NAME';
export function* loadLegalFormsWatcherSaga() {
  while (true) {
    const { payload }: { payload: string } = yield take(LOAD_LEGAL_FORMS);
    yield fork(loadLegalFormsWorkerSaga, payload);
  }
}
