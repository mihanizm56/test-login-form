import { SelectOptionType } from '@wildberries/ui-kit';
import { COUNTRIES_VALUES } from '@/pages/ui-registration/_constants';

type ParamsType = {
  countriesList: Array<SelectOptionType>;
  countryId: string;
};

export const getIsKppRequired = ({
  countriesList,
  countryId,
}: ParamsType): boolean => {
  const selectedCountry = countriesList.find(
    country => country.id === countryId,
  );

  return (
    selectedCountry &&
    selectedCountry.value !== COUNTRIES_VALUES.KZ &&
    selectedCountry.value !== COUNTRIES_VALUES.BY
  );
};
