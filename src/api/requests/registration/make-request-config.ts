import { IRequestParams } from '@mihanizm56/fetch-api';
import { getRegistrationEndpoint } from '@/api/endpoints/suppliers';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { RegistrationFormDataType } from '@/pages/ui-registration/page/_components/connected-registration-form/_types';
import { responseSchema } from './response-schema';

export type RequestParamsType = Omit<
  Partial<RegistrationFormDataType>,
  'passportDoc'
> & {
  legalFormID: string;
  countryID: string;
  inn: string;
  passportDocID: string;
};

export const makeRequestConfig = (
  formData: RequestParamsType,
): IRequestParams => ({
  endpoint: getRegistrationEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: {
    params: {
      supplier: formData,
    },
  },
});
