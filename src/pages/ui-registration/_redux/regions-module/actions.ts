import { Action } from '@wildberries/redux-core-modules';
import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';

export const SET_REGIONS = 'SET_REGIONS';
export const setRegionsAction: Action<Array<SelectOptionType>> = payload => ({
  type: SET_REGIONS,
  payload,
});
