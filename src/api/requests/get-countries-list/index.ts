import { JSONRPCRequest, IResponse } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

export const countriesListRequest = (
  options: RequestParamsType,
): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(options));
