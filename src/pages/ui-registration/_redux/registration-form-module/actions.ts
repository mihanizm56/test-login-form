import { BaseAction, Action } from '@wildberries/redux-core-modules';

export const SET_LOADING_START = 'SET_LOADING_START';
export const setRegistrationFormLoadingStartAction: BaseAction = () => ({
  type: SET_LOADING_START,
});

export const SET_LOADING_STOP = 'SET_LOADING_STOP';
export const setRegistrationFormLoadingStopAction: BaseAction = () => ({
  type: SET_LOADING_STOP,
});

export const SET_FORM_ERROR = 'SET_FORM_ERROR';
export const setRegistrationFormErrorAction: Action<any> = payload => ({
  type: SET_FORM_ERROR,
  payload,
});

export const RESET_FORM_ERROR = 'RESET_FORM_ERROR';
export const resetRegistrationFormErrorAction: Action<any> = payload => ({
  type: RESET_FORM_ERROR,
  payload,
});

export const SET_FORM_DATA = 'SET_FORM_DATA';
export const setRegistrationFormDataAction: Action<any> = payload => ({
  type: SET_FORM_DATA,
  payload,
});

export const RESET_FORM_DATA = 'RESET_FORM_DATA';
export const resetRegistrationFormDataAction: BaseAction = () => ({
  type: RESET_FORM_DATA,
});
