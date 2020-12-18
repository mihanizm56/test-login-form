import { createSelector } from 'reselect';
import {
  RegistrationFormStateType,
  RegistrationFormStatePartType,
} from './_types';
import { initialState } from './reducer';
import { MODULE_REDUCER_NAME } from './constants';

export const formSelector = (store: RegistrationFormStatePartType) =>
  store[MODULE_REDUCER_NAME] || initialState;

export const getFormIsLoadingSelector = createSelector(
  [formSelector],
  ({ isLoading }: RegistrationFormStateType) => isLoading,
);

export const getInitialFormValuesSelector = createSelector(
  [formSelector],
  ({ formData }: RegistrationFormStateType) => formData,
);

export const getFormExternalErrorsSelector = createSelector(
  [formSelector],
  ({ externalErrors }: RegistrationFormStateType) => externalErrors,
);

export const getHasFormExternalErrorsSelector = createSelector(
  [getFormExternalErrorsSelector],
  (externalErrors: Record<string, string>) =>
    Object.keys(externalErrors).length !== 0,
);
