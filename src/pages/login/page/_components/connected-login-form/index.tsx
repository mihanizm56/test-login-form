import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginFormView } from './_components/login-form-view';
import { ChangeFormFieldValuesType } from './_types';
import { FORM_VALIDATIONS_CONFIG } from './_utils/form-validations-config';

class WrappedContainer extends Component {
  handleSubmitForm = values => {
    console.log('values', values); // eslint-disable-line
  };

  handleChangeField: ChangeFormFieldValuesType = params => {
    console.log('params', params); // eslint-disable-line
  };

  render() {
    return (
      <LoginFormView
        changeFormField={this.handleChangeField}
        externalErrors={{}}
        formValidations={FORM_VALIDATIONS_CONFIG}
        isLoading
        submitLoginForm={this.handleSubmitForm}
      />
    );
  }
}

export const ConnectedLoginForm = connect(null)(WrappedContainer);
