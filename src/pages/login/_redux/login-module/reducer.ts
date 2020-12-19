import { LoginFormStorage } from './_types';
import {
  SET_EXTERNAL_LOGIN_ERRORS,
  REMOVE_EXTERNAL_LOGIN_ERRORS,
  SET_LOADING_START,
  SET_LOADING_STOP,
} from './actions';

export const initialState: LoginFormStorage = {
  externalErrors: {},
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }): LoginFormStorage => {
  switch (type) {
    case SET_LOADING_START:
      return { ...state, isLoading: true };
    case SET_LOADING_STOP:
      return { ...state, isLoading: false };
    case SET_EXTERNAL_LOGIN_ERRORS:
      return { ...state, externalErrors: payload };
    case REMOVE_EXTERNAL_LOGIN_ERRORS:
      return { ...state, externalErrors: initialState.externalErrors };

    default:
      return state;
  }
};

export default reducer;
