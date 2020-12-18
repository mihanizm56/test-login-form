import { LOGIN_ENDPOINT } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  login: string;
  password: string;
};

export const makeRequestConfig = ({ login, password }: RequestParamsType) => ({
  endpoint: LOGIN_ENDPOINT,
  responseSchema,
  body: {
    login,
    password,
  },
});
