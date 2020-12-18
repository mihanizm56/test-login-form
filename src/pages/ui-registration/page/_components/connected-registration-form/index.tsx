import React, { Component, ComponentType } from 'react';
import {
  BaseAction,
  Action,
  redirectToPlatformRouteManagerSagaAction,
  IRedirectManagerPayload,
} from '@wildberries/redux-core-modules';
import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Router } from 'router5';
import { withRouter } from 'react-router5';
import { batchActions } from 'redux-batched-actions';
import { getSupplierFormPageIsLoadingSelector } from '@/_redux/ui-module';
import {
  listLegalFormsSelector,
  loadLegalFormsActionSaga,
} from '@/pages/ui-registration/_redux/legal-forms-module';
import { getOmittedObject } from '@/_utils/omit';
import { LEGAL_FORM_VALUES } from '@/pages/ui-registration/_constants';
import { WB_MAIN_PAGE } from '@/_constants';
import {
  setRegistrationFormLoadingStartAction,
  setRegistrationFormLoadingStopAction,
  getFormIsLoadingSelector,
  getInitialFormValuesSelector,
  setRegistrationFormDataAction,
  setRegistrationFormErrorAction,
  getFormExternalErrorsSelector,
  getHasFormExternalErrorsSelector,
  resetRegistrationFormErrorAction,
} from '../../../_redux/registration-form-module';
import { getCountriesListDataSelector } from '../../../_redux/regions-module';
import {
  loadInnInfoActionSaga,
  registrationActionSaga,
} from '../../../_redux/registration-module';
import { FORM_FIELD_NAMES, FORM_TRANSLATED_TEXT } from './_constants';
import { RegistrationFormView } from './_components/registartion-form-view';
import { RegistrationFormDataType } from './_types';
import { getFormValidationsConfig } from './_utils/form-validations-config';
import { getNamePlaceholder } from './_utils/placeholders/get-name-placeholder';
import { getNameFieldTooltipText } from './_utils/get-name-field-tooltip-text';
import { getGeneralFieldOptions } from './_utils/get-general-field-options';
import { getFieldsShownConditions } from './_utils/fields-shown-conditions';
import { getIsKppRequired } from './_utils/form-validations-config/kpp-validation-utils/get-is-kpp-required';

type PropsType = {
  isFormLoading: boolean;
  formLoadingStartAction: BaseAction;
  formLoadingStopAction: BaseAction;
  submitFormAction: Action<RegistrationFormDataType>;
  countriesList: Array<SelectOptionType>;
  redirectToPlatformRoute: Action<IRedirectManagerPayload>;
  initialFormValues: RegistrationFormDataType;
  setRegistrationFormError: Action<any>;
  formExternalErrors: Record<string, string>;
  hasFormExternalErrors: boolean;
  listLegalForms: Array<SelectOptionType>;
  isFullFormLoading: boolean;
  loadInnInfo: Action<RegistrationFormDataType>;
  resetRegistrationFormError: BaseAction;
  setRegistrationFormData: Action<Partial<RegistrationFormDataType>>;
  router: Router;
  loadLegalForms: Action<string>;
};

type ChangeFormFieldParamsType = {
  name: string;
  value: any;
  form?: Record<string, any>;
  errors?: Record<string, string>;
};

type HandleChangeInnParamsType = {
  value: any;
  form: Record<string, any>;
};

type HandleChangeLegalFormType = HandleChangeInnParamsType;

type HandleChangeCountryIdType = {
  value: any;
};

type StateType = {
  selectedLegalFormID: string;
  selectedCountryID: string;
};

export class WrappedContainer extends Component<PropsType, StateType> {
  state = {
    selectedLegalFormID: null,
    selectedCountryID: null,
  };

  onSubmit = (formValues: RegistrationFormDataType) =>
    this.props.submitFormAction(formValues);

  handleChangeLegalFormId = ({ form, value }: HandleChangeLegalFormType) => {
    const countryID = form.getState().values.countryID;

    this.setState({ selectedLegalFormID: value });

    batchActions([
      this.props.resetRegistrationFormError(),
      this.props.setRegistrationFormData({
        countryID,
        legalFormID: value,
        passportDoc: [],
      }),
    ]);
  };

  handleChangeCountryId = ({ value }: HandleChangeCountryIdType) => {
    this.setState({ selectedCountryID: value });

    batchActions([
      this.props.resetRegistrationFormError(),
      this.props.setRegistrationFormData({
        countryID: value,
        legalFormID: '',
        passportDoc: [],
      }),
      this.props.loadLegalForms(value),
    ]);
  };

  handleChangeInn = ({ form, value }: HandleChangeInnParamsType) => {
    const legalFormOption = this.props.listLegalForms.find(
      formType => formType.id === this.state.selectedLegalFormID,
    );

    if (legalFormOption.value !== LEGAL_FORM_VALUES.ownJob) {
      this.props.loadInnInfo({
        ...form.getState().values,
        inn: value,
        legalFormID: this.state.selectedLegalFormID,
      });
    }
  };

  handleChangeFormErrors = ({ name }: { name: string }) => {
    const newExternalErrors = getOmittedObject({
      key: name,
      object: this.props.formExternalErrors,
    });

    this.props.setRegistrationFormError(newExternalErrors);
  };

  handleChangeFormField = ({
    name,
    value,
    form,
    errors,
  }: ChangeFormFieldParamsType) => {
    if (name === FORM_FIELD_NAMES.legalFormID && value && form) {
      this.handleChangeLegalFormId({ form, value });
    } else if (name === FORM_FIELD_NAMES.countryID && value) {
      this.handleChangeCountryId({ value });
    } else if (
      name === FORM_FIELD_NAMES.inn &&
      !errors[FORM_FIELD_NAMES.inn] &&
      form &&
      value
    ) {
      this.handleChangeInn({ form, value });
    } else if (this.props.formExternalErrors[name]) {
      this.handleChangeFormErrors({ name });
    }
  };

  handleBackRedirect = () => this.props.router.navigate(WB_MAIN_PAGE);

  render() {
    return (
      <RegistrationFormView
        countries={this.props.countriesList}
        fieldsToShow={getFieldsShownConditions({
          countriesList: this.props.countriesList,
          countryId: this.state.selectedCountryID,
          legalFormId: this.state.selectedLegalFormID,
          legalFormsList: this.props.listLegalForms,
        })}
        formExternalErrors={this.props.formExternalErrors}
        formValidationsConfig={getFormValidationsConfig({
          legalFormId: this.state.selectedLegalFormID,
          legalFormsList: this.props.listLegalForms,
          countriesList: this.props.countriesList,
          countryId: this.state.selectedCountryID,
        })}
        generalFieldOptions={getGeneralFieldOptions({
          listLegalForms: this.props.listLegalForms,
          legalFormId: this.state.selectedLegalFormID,
        })}
        handleBackRedirect={this.handleBackRedirect}
        handleChangeFormField={this.handleChangeFormField}
        hasBackendErrors={this.props.hasFormExternalErrors}
        initialFormData={this.props.initialFormValues}
        isFullFormLoading={this.props.isFullFormLoading}
        isKPPRequired={getIsKppRequired({
          countriesList: this.props.countriesList,
          countryId: this.state.selectedCountryID,
        })}
        isLoading={this.props.isFormLoading}
        legalFormValue={this.state.selectedLegalFormID}
        listLegalForms={this.props.listLegalForms}
        nameFieldPlaceholder={getNamePlaceholder({
          listLegalForms: this.props.listLegalForms,
          legalFormId: this.state.selectedLegalFormID,
        })}
        nameFieldTooltipText={getNameFieldTooltipText({
          listLegalForms: this.props.listLegalForms,
          legalFormId: this.state.selectedLegalFormID,
        })}
        submitForm={this.onSubmit}
        translatedFormText={FORM_TRANSLATED_TEXT}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFormLoading: getFormIsLoadingSelector(state),
  countriesList: getCountriesListDataSelector(state),
  initialFormValues: getInitialFormValuesSelector(state),
  formExternalErrors: getFormExternalErrorsSelector(state),
  hasFormExternalErrors: getHasFormExternalErrorsSelector(state),
  isFullFormLoading: getSupplierFormPageIsLoadingSelector(state),
  listLegalForms: listLegalFormsSelector(state),
});

const mapDispatchToProps = {
  formLoadingStartAction: setRegistrationFormLoadingStartAction,
  formLoadingStopAction: setRegistrationFormLoadingStopAction,
  submitFormAction: registrationActionSaga,
  redirectToPlatformRoute: redirectToPlatformRouteManagerSagaAction,
  setRegistrationFormData: setRegistrationFormDataAction,
  setRegistrationFormError: setRegistrationFormErrorAction,
  resetRegistrationFormError: resetRegistrationFormErrorAction,
  loadInnInfo: loadInnInfoActionSaga,
  loadLegalForms: loadLegalFormsActionSaga,
};

export const ConnectedRegistrationForm = compose<ComponentType<{}>>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(WrappedContainer);
