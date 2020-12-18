import { RequestParamsType } from '@/api/requests/registration/make-request-config';
import { RegistrationFormDataType } from '@/pages/ui-registration/page/_components/connected-registration-form/_types';

type ParamsType = {
  formData: RegistrationFormDataType;
  passportDocID: string;
};

export const getFormattedFormData = ({
  formData,
  passportDocID,
}: ParamsType): RequestParamsType => {
  const { passportDoc, name, ...restData } = formData;

  return {
    ...restData,
    passportDocID,
    name: name || restData.general,
  };
};
