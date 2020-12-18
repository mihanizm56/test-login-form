import { COUNTRIES_VALUES } from '@/pages/ui-registration/_constants';
import { FieldsShownConditionsParamsType } from '../_types';

export const legalFormIDCondition = ({
  countryId,
  legalFormsList,
  countriesList,
}: FieldsShownConditionsParamsType): boolean => {
  const selectedCountry = countriesList.find(
    country => country.id === countryId,
  );

  if (!selectedCountry) {
    return false;
  }

  const isExistedCountry = Object.values(COUNTRIES_VALUES).includes(
    selectedCountry.value,
  );

  return (
    isExistedCountry &&
    Boolean(legalFormsList) &&
    Boolean(legalFormsList.length) &&
    Boolean(countryId)
  );
};
