import { Action, BaseAction } from '@wildberries/redux-core-modules';
import { LoginFormValuesType } from '../../_types';

export const LOGIN_ACTION_SAGA = 'LOGIN_ACTION_SAGA';
export const loginActionSaga: Action<LoginFormValuesType> = payload => ({
  type: LOGIN_ACTION_SAGA,
  payload,
});

export const SET_EXTERNAL_LOGIN_ERROR = 'SET_EXTERNAL_LOGIN_ERROR';
export const setExternalErrorsLoginFormAction: Action<
  Record<string, string>
> = payload => ({
  type: SET_EXTERNAL_LOGIN_ERROR,
  payload,
});

export const REMOVE_EXTERNAL_LOGIN_ERROR = 'REMOVE_EXTERNAL_LOGIN_ERROR';
export const removeExternalErrorsLoginFormAction: BaseAction = () => ({
  type: REMOVE_EXTERNAL_LOGIN_ERROR,
});

export const SET_LOADING_START = 'SET_LOADING_START';
export const setLoginFormStartLoadingAction: BaseAction = () => ({
  type: SET_LOADING_START,
});

export const SET_LOADING_STOP = 'SET_LOADING_STOP';
export const setLoginFormStopLoadingAction: BaseAction = () => ({
  type: SET_LOADING_STOP,
});
