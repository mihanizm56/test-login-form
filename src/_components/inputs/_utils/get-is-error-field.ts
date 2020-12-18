import { getIsValueEmpty } from './get-is-value-empty';

export type GetIsErrorFieldParamsType<ValueType> = {
  modified?: boolean;
  validationErrorMessage?: string;
  externalErrorMessage?: string;
  value: ValueType;
};

// three possible error conditions
// 1 - the field was used and it did not pass validation in the form
// 2 - the field has not been used, but there is a value inside it and it does not pass validation
// (case with reloading data into a form in a select when the form updates all modified fields when initialValues changes)
// 3 - an external error has come to the field
export const getIsErrorField = <ValueType>({
  modified,
  validationErrorMessage,
  externalErrorMessage,
  value,
}: GetIsErrorFieldParamsType<ValueType>): boolean => {
  const isValueEmpty = getIsValueEmpty<ValueType>(value);

  return (
    (modified && Boolean(validationErrorMessage)) ||
    (!isValueEmpty && !modified && Boolean(validationErrorMessage)) ||
    Boolean(externalErrorMessage)
  );
};
