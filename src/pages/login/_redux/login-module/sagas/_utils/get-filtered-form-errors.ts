import { LOGIN_FORM_FIELD_NAMES } from '@/pages/login/_constants';

export const getFilteredFormErrors = (errorsObject: Record<string, string>) =>
  Object.keys(errorsObject).reduce((acc, errorFieldName) => {
    if (errorFieldName in LOGIN_FORM_FIELD_NAMES) {
      return { ...acc, [errorFieldName]: errorsObject[errorFieldName] };
    }

    return acc;
  }, {});
