/* eslint-disable @typescript-eslint/camelcase */

import {
  SimpleValidator,
  composeValidators,
  PatternValidator,
} from '@wildberries/validators';
import i18next from 'i18next';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { pageSubNamespace } from '../../../../../_constants/page-sub-namespace';
import { FieldsGetValidationParamsType } from '../fields-shown-conditions/_types';
import { INNValidate } from './inn-validation';
import { uploadPhotoValidate } from './upload-photo-validation';
import { getIsKPPRequiredValidator } from './kpp-validation-utils/get-is-kpp-required-validator';

const simpleFieldValidator = new SimpleValidator();
const patternFieldValidator = new PatternValidator();

export const getFormValidationsConfig = ({
  legalFormId,
  legalFormsList,
  countriesList,
  countryId,
}: FieldsGetValidationParamsType) => ({
  legalForm: composeValidators([
    simpleFieldValidator.requiredValidator(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.required`,
      ),
    ),
  ]),
  countryID: composeValidators([
    simpleFieldValidator.requiredValidator(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.required`,
      ),
    ),
  ]),
  unp: composeValidators([
    patternFieldValidator.numbersOnly(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.numbers-only`,
      ),
    ),
  ]),
  bin: composeValidators([
    patternFieldValidator.numbersOnly(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.numbers-only`,
      ),
    ),
  ]),
  inn: composeValidators([
    simpleFieldValidator.requiredValidator(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.required`,
      ),
    ),
    patternFieldValidator.numbersOnly(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.numbers-only`,
      ),
    ),
    simpleFieldValidator.minLenghtValidate(
      9,
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.min-value`,
      ),
    ),
    simpleFieldValidator.maxLenghtValidate(
      12,
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.max-value`,
      ),
    ),
    INNValidate({
      legalFormId,
      legalFormsList,
      errorTextValue: i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.inn-invalid`,
      ),
    }),
  ]),
  kpp: composeValidators([
    getIsKPPRequiredValidator({
      countriesList,
      countryId,
      simpleFieldValidator,
    }),
    simpleFieldValidator.minLenghtValidate(
      9,
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.min-value`,
      ),
    ),
    patternFieldValidator.numbersOnly(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.numbers-only`,
      ),
    ),
    simpleFieldValidator.maxLenghtValidate(
      9,
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.max-value`,
      ),
    ),
  ]),
  passportDoc: composeValidators([
    uploadPhotoValidate(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.upload-document-required`,
      ),
    ),
  ]),
  name: composeValidators([
    simpleFieldValidator.requiredValidator(
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.required`,
      ),
    ),
    simpleFieldValidator.maxLenghtValidate(
      100,
      i18next.t(
        `${appNamespace}:${pageSubNamespace}.field-form-errors.max-value`,
      ),
    ),
  ]),
});
