import { SelectOptionType } from '@wildberries/ui-kit';
import { LEGAL_FORM_VALUES } from '@/pages/ui-registration/_constants';
import { checksumINNBusiness } from './inn-checksum-business';
import { checksumINNOrganization } from './inn-checksum-organization';

type ParamsType = {
  legalFormValue?: SelectOptionType;
  isShort?: boolean;
  isLong?: boolean;
};

export const getChecksumValidator = ({
  legalFormValue,
  isShort,
  isLong,
}: ParamsType) => {
  if (!legalFormValue) {
    return checksumINNOrganization;
  }

  if (isShort) {
    return checksumINNOrganization;
  }

  if (isLong) {
    return checksumINNBusiness;
  }

  return legalFormValue.value === LEGAL_FORM_VALUES.organizationWithNds ||
    legalFormValue.value === LEGAL_FORM_VALUES.organizationWithoutNds
    ? checksumINNOrganization
    : checksumINNBusiness;
};
