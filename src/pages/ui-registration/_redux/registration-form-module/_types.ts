import { MODULE_REDUCER_NAME } from './constants';

export type RegistrationFormStateType = {
  isLoading: boolean;
  formData: any;
  externalErrors: Record<string, string>;
};

export type RegistrationFormStatePartType = {
  [MODULE_REDUCER_NAME]: RegistrationFormStateType;
};
