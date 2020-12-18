import { getLoadInnInfoEndpoint } from '@/api/endpoints/suppliers';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  inn: string;
  legalFormID: string;
};

export const makeRequestConfig = ({ inn, legalFormID }: RequestParamsType) => ({
  endpoint: getLoadInnInfoEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: {
    params: { inn, legalFormID },
  },
});
