import { getCountriesEndpoint } from '@/api/endpoints/suppliers';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  locale: string;
  abortRequestId: string;
};

export const makeRequestConfig = ({
  locale,
  abortRequestId,
}: RequestParamsType) => ({
  endpoint: getCountriesEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
  abortRequestId,
  body: {
    params: {
      country: locale,
    },
  },
});
