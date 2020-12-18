import { createSelector } from 'reselect';
import { IUIState, IUIStatePart } from './types';
import { MODULE_REDUCER_NAME } from './constants';
import { initialState } from './reducer';

export const UIStorageSelector = (store: IUIStatePart) =>
  store[MODULE_REDUCER_NAME] || initialState;

export const getAppIsLoadingSelector = createSelector(
  [UIStorageSelector],
  ({ appIsLoadingState }: IUIState) => appIsLoadingState,
);

export const getIsAppErrorSelector = createSelector(
  [UIStorageSelector],
  ({ isAppError }: IUIState) => isAppError,
);

export const getSupplierFormPageIsLoadingSelector = createSelector(
  [UIStorageSelector],
  ({ supplierPageIsLoadingState }: IUIState) => supplierPageIsLoadingState,
);

export const geti18nextIsLoadingSelector = createSelector(
  [UIStorageSelector],
  ({ i18nextIsLoadingState }: IUIState) => i18nextIsLoadingState,
);
