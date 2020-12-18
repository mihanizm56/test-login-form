import { MODULE_REDUCER_NAME } from './constants';

export type LoginFormStorage = {
  externalErrors: Record<string, string>;
  isLoading: boolean;
};

export type LoginFormStoragePart = {
  [MODULE_REDUCER_NAME]: LoginFormStorage;
};
