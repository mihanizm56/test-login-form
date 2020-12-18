import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import { MODULE_REDUCER_NAME } from './constants';

export type LegalListStateType = {
  data: Array<SelectOptionType>;
};

export type LegalListStatePartType = {
  [MODULE_REDUCER_NAME]: LegalListStateType;
};
