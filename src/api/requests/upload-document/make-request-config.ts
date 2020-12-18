import { IRequestParams } from '@mihanizm56/fetch-api';
import { getUploadDocumentEndpoint } from '@/api/endpoints/suppliers';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  contentType: string;
  filename: string;
  data: any;
};

export const makeRequestConfig = (
  fileParams: RequestParamsType,
): IRequestParams => ({
  endpoint: getUploadDocumentEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: {
    params: {
      file: fileParams,
    },
  },
});
