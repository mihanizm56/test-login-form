import { Action, BaseAction } from '@wildberries/redux-core-modules';
import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';

export const SET_LEGAL_FORMS = 'SET_LEGAL_FORMS';
export const setLegalFormsAction: Action<
  Array<SelectOptionType>
> = payload => ({
  type: SET_LEGAL_FORMS,
  payload,
});

export const RESET_LEGAL_FORMS = 'RESET_LEGAL_FORMS';
export const resetLegalFormsAction: BaseAction = () => ({
  type: RESET_LEGAL_FORMS,
});

export const LOAD_LEGAL_FORMS = 'LOAD_LEGAL_FORMS';
export const loadLegalFormsActionSaga: Action<string> = payload => ({
  type: LOAD_LEGAL_FORMS,
  payload,
});
