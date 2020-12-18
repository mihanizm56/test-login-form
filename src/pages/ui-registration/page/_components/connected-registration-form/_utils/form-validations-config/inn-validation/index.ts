import { SelectOptionType } from '@wildberries/ui-kit';
import { getChecksumValidator } from './get-checksum-validator';

type ParamsType = {
  legalFormId: string;
  legalFormsList: Array<SelectOptionType>;
  errorTextValue: string;
  isShort?: boolean;
  isLong?: boolean;
};

type OutputType = {
  error: boolean;
  errorTextValue: string;
};

export const INNValidate = ({
  legalFormId,
  legalFormsList,
  errorTextValue,
  isShort,
  isLong,
}: ParamsType) => (value: string): OutputType => {
  if (!legalFormId) {
    return { error: false, errorTextValue: '' };
  }

  const legalFormValue = legalFormsList.find(
    formType => formType.id === legalFormId,
  );

  const INNNumber = String(value)
    .split('')
    .map(Number);

  const validator = getChecksumValidator({
    isShort,
    isLong,
    legalFormValue,
  });

  const isValid = validator(INNNumber);

  return isValid
    ? { error: false, errorTextValue: '' }
    : {
        error: true,
        errorTextValue,
      };
};
