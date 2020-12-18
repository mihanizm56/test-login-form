import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import { SET_LEGAL_FORMS, RESET_LEGAL_FORMS } from './actions';
import { LegalListStateType } from './_types';

export const initialState: LegalListStateType = {
  data: [],
};

type ActionsType = {
  type: string;
  payload: Array<SelectOptionType>;
};

const reducer = (
  state: LegalListStateType = initialState,
  { type, payload }: ActionsType,
) => {
  switch (type) {
    case SET_LEGAL_FORMS:
      return { ...state, data: payload };
    case RESET_LEGAL_FORMS:
      return { ...state, data: initialState.data };

    default:
      return state;
  }
};

export default reducer;
