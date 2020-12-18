import { SelectOptionType } from '@wildberries/ui-kit';

export type CustomFieldConditionType = ({
  value,
  name,
}: {
  value: any;
  name?: string;
}) => boolean;

export type FieldConditionType = (
  params: FieldsShownConditionsParamsType,
) => CustomFieldConditionType;

export type FieldsToShowType = {
  kpp: boolean;
  general: boolean;
  ogrn: boolean;
  ogrnip: boolean;
  okpo: boolean;
  okopf: boolean;
  inn: boolean;
  legalFormID: boolean;
  name: boolean;
  fullName: boolean;
  bin: boolean;
  unp: boolean;
};

export type FieldsShownConditionsParamsType = {
  countriesList: Array<SelectOptionType>;
  countryId?: string;
  legalFormId?: string;
  legalFormsList: Array<SelectOptionType>;
};

export type FieldsGetValidationParamsType = FieldsShownConditionsParamsType;
