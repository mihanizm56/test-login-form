import { Action } from '@wildberries/redux-core-modules';
import { RegistrationFormDataType } from '../../page/_components/connected-registration-form/_types';

export const REGISTER_ACTION = 'REGISTER_ACTION';
export const registrationActionSaga: Action<
  RegistrationFormDataType
> = payload => ({
  type: REGISTER_ACTION,
  payload,
});

export const LOAD_INN_INFO = 'LOAD_INN_INFO';
export const loadInnInfoActionSaga: Action<string> = payload => ({
  type: LOAD_INN_INFO,
  payload,
});
