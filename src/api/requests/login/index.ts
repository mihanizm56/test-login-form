import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

export const loginRequest = (options: RequestParamsType): Promise<IResponse> =>
  new PureRestRequest().postRequest(makeRequestConfig(options));
