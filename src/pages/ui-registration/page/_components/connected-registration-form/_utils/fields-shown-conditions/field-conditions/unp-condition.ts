import { COUNTRIES_VALUES } from '@/pages/ui-registration/_constants';
import { FieldsShownConditionsParamsType } from '../_types';

export const unpCondition = ({
  countriesList,
  countryId,
}: FieldsShownConditionsParamsType): boolean => {
  const selectedCountry = countriesList.find(
    country => country.id === countryId,
  );

  if (!selectedCountry) {
    return false;
  }

  return selectedCountry.value === COUNTRIES_VALUES.BY;
};
