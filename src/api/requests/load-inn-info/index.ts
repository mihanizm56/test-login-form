import { JSONRPCRequest, IResponse } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

export const loadInnInfoRequest = (
  params: RequestParamsType,
): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
