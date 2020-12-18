import { getListLegalFormsEndpoint } from '@/api/endpoints/suppliers';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (countryID: string) => ({
  endpoint: getListLegalFormsEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: {
    params: {
      countryID,
    },
  },
});
