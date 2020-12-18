import { createSelector } from 'reselect';
import { LoginFormStorage, LoginFormStoragePart } from './_types';
import { initialState } from './reducer';
import { MODULE_REDUCER_NAME } from './constants';

const loginFormStorageSelector = (
  store: LoginFormStoragePart,
): LoginFormStorage => store[MODULE_REDUCER_NAME] || initialState;

export const loginFormExternalErrorsSelector = createSelector(
  [loginFormStorageSelector],
  ({ externalErrors }: LoginFormStorage) => externalErrors,
);

export const loginFormIsLoadingSelector = createSelector(
  [loginFormStorageSelector],
  ({ isLoading }: LoginFormStorage) => isLoading,
);
