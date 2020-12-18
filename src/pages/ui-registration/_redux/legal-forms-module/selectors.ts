import { createSelector } from 'reselect';
import i18next from 'i18next';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { LegalListStateType, LegalListStatePartType } from './_types';
import { initialState } from './reducer';
import { MODULE_REDUCER_NAME } from './constants';

export const LegalFormsSelector = (store: LegalListStatePartType) =>
  store[MODULE_REDUCER_NAME] || initialState;

export const listLegalFormsSelector = createSelector(
  [LegalFormsSelector],
  ({ data }: LegalListStateType) =>
    data.map(formType => ({
      ...formType,
      title: i18next.t(`${appNamespace}:${formType.title}`),
    })),
);
