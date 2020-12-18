import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import { SET_REGIONS } from './actions';
import { CountriesStateType } from './_types';

export const initialState: CountriesStateType = {
  data: [],
};

type ActionsType = {
  type: string;
  payload: Array<SelectOptionType>;
};

const reducer = (
  state: CountriesStateType = initialState,
  { type, payload }: ActionsType,
) => {
  switch (type) {
    case SET_REGIONS:
      return { ...state, data: payload };

    default:
      return state;
  }
};

export default reducer;
