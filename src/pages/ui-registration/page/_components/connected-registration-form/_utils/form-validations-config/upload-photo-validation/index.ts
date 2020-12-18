import { SelectOptionType } from '@wildberries/ui-kit';

type ParamsType = {
  legalFormID: string;
  listLegalForms: Array<SelectOptionType>;
  errorTextValue: string;
};

type OutputType = {
  error: boolean;
  errorTextValue: string;
};

export const uploadPhotoValidate = (errorTextValue: string) => (
  value: string,
): OutputType =>
  Boolean(value.length)
    ? { error: false, errorTextValue: '' }
    : {
        error: true,
        errorTextValue,
      };
