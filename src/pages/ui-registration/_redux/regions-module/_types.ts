import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import { MODULE_REDUCER_NAME } from './constants';

export type CountriesStateType = {
  data: Array<SelectOptionType>;
};

export type CountriesStatePartType = {
  [MODULE_REDUCER_NAME]: CountriesStateType;
};
