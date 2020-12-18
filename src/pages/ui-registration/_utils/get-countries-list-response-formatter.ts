import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import i18next from 'i18next';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { pageSubNamespace } from '../_constants/page-sub-namespace';

type CountriesResponceType = Omit<SelectOptionType, 'label'> & {
  label: string;
};

type ParamsType = {
  countries: Array<CountriesResponceType>;
};

export const getCountriesListResponseFormatter = ({
  countries,
}: ParamsType) => ({
  countries: countries.map(item => ({
    ...item,
    title: i18next.t(`${appNamespace}:${pageSubNamespace}.${item.label}`),
    disabled: false,
  })),
});
