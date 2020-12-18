import { kppCondition } from './field-conditions/kpp-condition';
import { ogrnCondition } from './field-conditions/ogrn-condition';
import { ogrnipCondition } from './field-conditions/ogrnip-condition';
import { okpoCondition } from './field-conditions/okpo-condition';
import { okopfCondition } from './field-conditions/okopf-condition';
import { fullNameCondition } from './field-conditions/fullname-condition';
import { innCondition } from './field-conditions/inn-condition';
import { legalFormIDCondition } from './field-conditions/legal-form-id-condition';
import { nameCondition } from './field-conditions/name-condition';
import { FieldsShownConditionsParamsType, FieldsToShowType } from './_types';
import { binCondition } from './field-conditions/bin-condition';
import { unpCondition } from './field-conditions/unp-condition';
import { generalCondition } from './field-conditions/general-condition';

export const getFieldsShownConditions = (
  params: FieldsShownConditionsParamsType,
): FieldsToShowType => ({
  kpp: kppCondition(params),
  ogrn: ogrnCondition(params),
  ogrnip: ogrnipCondition(params),
  okpo: okpoCondition(params),
  okopf: okopfCondition(params),
  fullName: fullNameCondition(params),
  inn: innCondition(params),
  legalFormID: legalFormIDCondition(params),
  name: nameCondition(params),
  bin: binCondition(params),
  unp: unpCondition(params),
  general: generalCondition(params),
});
