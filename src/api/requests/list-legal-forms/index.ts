import { JSONRPCRequest, IResponse } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const listLegalFormsRequest = (countryID: string): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(countryID));
