import {
  SET_LOADING_START,
  SET_LOADING_STOP,
  SET_FORM_ERROR,
  RESET_FORM_ERROR,
  SET_FORM_DATA,
  RESET_FORM_DATA,
} from './actions';
import { RegistrationFormStateType } from './_types';

export const initialState: RegistrationFormStateType = {
  isLoading: false,
  formData: {
    passportDoc: [],
  },
  externalErrors: {},
};

type ActionsType = {
  type: string;
  payload: any;
};

const reducer = (
  state: RegistrationFormStateType = initialState,
  { type, payload }: ActionsType,
) => {
  switch (type) {
    case SET_LOADING_START:
      return { ...state, isLoading: true };

    case SET_LOADING_STOP:
      return { ...state, isLoading: false };

    case SET_FORM_DATA:
      return { ...state, formData: payload };

    case RESET_FORM_DATA:
      return { ...state, formData: initialState.formData };

    case SET_FORM_ERROR:
      return { ...state, externalErrors: payload };

    case RESET_FORM_ERROR:
      return { ...state, externalErrors: initialState.externalErrors };

    default:
      return state;
  }
};

export default reducer;
