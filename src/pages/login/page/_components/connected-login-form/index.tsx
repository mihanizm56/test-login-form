import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loginActionSaga,
  loginFormExternalErrorsSelector,
  loginFormIsLoadingSelector,
} from '@/pages/login/_redux/login-module';
import { LoginFormValuesType } from '@/pages/login/_types';
import { LoginFormView } from './_components/login-form-view';
import { ChangeFormFieldValuesType } from './_types';
import { FORM_VALIDATIONS_CONFIG } from './_utils/form-validations-config';

type PropsType = {
  loginFormExternalErrors: Record<string, string>;
  loginFormIsLoading: boolean;
  login: typeof loginActionSaga;
};

class WrappedContainer extends Component<PropsType> {
  handleSubmitForm = (values: LoginFormValuesType) => {
    this.props.login(values);
  };

  handleChangeField: ChangeFormFieldValuesType = () => {
    // console.log('params', params); // eslint-disable-line
  };

  render() {
    return (
      <LoginFormView
        changeFormField={this.handleChangeField}
        externalErrors={this.props.loginFormExternalErrors}
        formValidations={FORM_VALIDATIONS_CONFIG}
        isLoading={this.props.loginFormIsLoading}
        submitLoginForm={this.handleSubmitForm}
      />
    );
  }
}

const mapStateToProps = state => ({
  loginFormExternalErrors: loginFormExternalErrorsSelector(state),
  loginFormIsLoading: loginFormIsLoadingSelector(state),
});

const mapDispatchToProps = {
  login: loginActionSaga,
};

export const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
