import { LoginFormStorage } from './_types';
import {
  SET_EXTERNAL_LOGIN_ERROR,
  REMOVE_EXTERNAL_LOGIN_ERROR,
  SET_LOADING_START,
  SET_LOADING_STOP,
} from './actions';

export const initialState: LoginFormStorage = {
  externalErrors: {},
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_START:
      return { ...state, isLoading: true };
    case SET_LOADING_STOP:
      return { ...state, isLoading: false };
    case SET_EXTERNAL_LOGIN_ERROR:
      return { ...state, externalError: payload };
    case REMOVE_EXTERNAL_LOGIN_ERROR:
      return { ...state, externalError: '' };

    default:
      return state;
  }
};

export default reducer;
