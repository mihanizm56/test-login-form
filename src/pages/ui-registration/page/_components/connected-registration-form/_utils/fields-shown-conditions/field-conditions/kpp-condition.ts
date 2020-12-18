import {
  COUNTRIES_VALUES,
  LEGAL_FORM_VALUES,
} from '@/pages/ui-registration/_constants';
import { FieldsShownConditionsParamsType } from '../_types';

export const kppCondition = ({
  legalFormsList,
  legalFormId,
  countriesList,
  countryId,
}: FieldsShownConditionsParamsType): boolean => {
  const legalForm = legalFormsList.find(form => form.id === legalFormId);
  const selectedCountry = countriesList.find(
    country => country.id === countryId,
  );

  if (!legalForm || !selectedCountry) {
    return false;
  }

  if (selectedCountry.value !== COUNTRIES_VALUES.RU) {
    return true;
  }

  return (
    legalForm.value === LEGAL_FORM_VALUES.organizationWithoutNds ||
    legalForm.value === LEGAL_FORM_VALUES.organizationWithNds
  );
};
