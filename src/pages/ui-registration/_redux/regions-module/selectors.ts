import { createSelector } from 'reselect';
import { CountriesStateType, CountriesStatePartType } from './_types';
import { initialState } from './reducer';
import { MODULE_REDUCER_NAME } from './constants';

export const countriesSelector = (store: CountriesStatePartType) =>
  store[MODULE_REDUCER_NAME] || initialState;

export const getCountriesListDataSelector = createSelector(
  [countriesSelector],
  ({ data }: CountriesStateType) => data || initialState.data,
);
