import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { ButtonLink } from '@wildberries/ui-kit';
import { TranslatedRegistrationFormTextType } from '../../../../_types';
import styles from './index.module.scss';

const BLOCK_NAME = 'Submit-buttons-box';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  translatedFormText: TranslatedRegistrationFormTextType;
  hasBackendErrors: boolean;
  handleBackRedirect: () => void;
  errors: Record<string, string>;
};

export const SubmitButtonsBlock = memo(
  ({
    isLoading,
    translatedFormText,
    hasBackendErrors,
    errors,
    handleBackRedirect,
  }: PropsType) => {
    const isDisabled = useMemo(
      () => isLoading || hasBackendErrors || Object.keys(errors).length !== 0,
      [errors, hasBackendErrors, isLoading],
    );

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__button-container`)}>
          <ButtonLink
            disabled={isDisabled}
            isLoading={isLoading}
            size="big"
            text={i18next.t(translatedFormText.buttonSubmit)}
            type="submit"
            variant="main"
          />
        </div>
        <div className={cn(`${BLOCK_NAME}__button-container`)}>
          <ButtonLink
            disabled={isLoading}
            onClick={handleBackRedirect}
            size="big"
            text={i18next.t(translatedFormText.buttonCancel)}
            type="button"
            variant="interface"
          />
        </div>
      </div>
    );
  },
);
