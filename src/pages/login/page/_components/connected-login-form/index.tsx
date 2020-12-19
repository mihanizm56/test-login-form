import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loginActionSaga,
  loginFormExternalErrorsSelector,
  loginFormHasExternalErrorsSelector,
  loginFormIsLoadingSelector,
  setExternalErrorsLoginFormAction,
} from '@/pages/login/_redux/login-module';
import { LoginFormValuesType } from '@/pages/login/_types';
import { getOmittedObject } from '@/_utils/omit';
import { LoginFormView } from './_components/login-form-view';
import { ChangeFormFieldValuesType } from './_types';
import { FORM_VALIDATIONS_CONFIG } from './_utils/form-validations-config';

type PropsType = {
  loginFormExternalErrors: Record<string, string>;
  loginFormIsLoading: boolean;
  login: typeof loginActionSaga;
  loginFormHasExternalErrors: boolean;
  setExternalErrors: typeof setExternalErrorsLoginFormAction;
};

class WrappedContainer extends Component<PropsType> {
  handleSubmitForm = (values: LoginFormValuesType) => {
    this.props.login(values);
  };

  handleChangeField: ChangeFormFieldValuesType = ({ name }) => {
    if (this.props.loginFormExternalErrors[name]) {
      this.handleChangeFormErrors({ name });
    }
  };

  handleChangeFormErrors = ({ name }: { name: string }) => {
    const newExternalErrors = getOmittedObject({
      key: name,
      object: this.props.loginFormExternalErrors,
    });

    this.props.setExternalErrors(newExternalErrors);
  };

  render() {
    return (
      <LoginFormView
        changeFormField={this.handleChangeField}
        externalErrors={this.props.loginFormExternalErrors}
        formValidations={FORM_VALIDATIONS_CONFIG}
        isLoading={this.props.loginFormIsLoading}
        loginFormHasExternalErrors={this.props.loginFormHasExternalErrors}
        submitLoginForm={this.handleSubmitForm}
      />
    );
  }
}

const mapStateToProps = state => ({
  loginFormExternalErrors: loginFormExternalErrorsSelector(state),
  loginFormIsLoading: loginFormIsLoadingSelector(state),
  loginFormHasExternalErrors: loginFormHasExternalErrorsSelector(state),
});

const mapDispatchToProps = {
  login: loginActionSaga,
  setExternalErrors: setExternalErrorsLoginFormAction,
};

export const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
