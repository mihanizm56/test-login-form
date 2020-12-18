import { COUNTRIES_VALUES } from '@/pages/ui-registration/_constants';
import { FieldsShownConditionsParamsType } from '../_types';

export const innCondition = ({
  legalFormsList,
  legalFormId,
  countriesList,
  countryId,
}: FieldsShownConditionsParamsType): boolean => {
  const selectedCountry = countriesList.find(
    country => country.id === countryId,
  );

  if (!selectedCountry) {
    return false;
  }

  if (selectedCountry.value !== COUNTRIES_VALUES.RU) {
    return false;
  }

  return Boolean(legalFormsList.find(formType => formType.id === legalFormId));
};
