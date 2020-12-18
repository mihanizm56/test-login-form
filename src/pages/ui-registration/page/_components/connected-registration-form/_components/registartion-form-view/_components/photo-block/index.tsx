import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Field } from 'react-final-form';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { CustomFormFileUploader } from '@/_components/custom-form-file-uploader';
import { FORM_FIELD_NAMES } from '../../../../_constants';
import { TranslatedRegistrationFormTextType } from '../../../../_types';
import styles from './index.module.scss';

const BLOCK_NAME = 'Photo-block';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  translatedFormText: TranslatedRegistrationFormTextType;
  formValidationsConfig: Record<string, any>;
};

export const PhotoBlock = memo(
  ({ isLoading, translatedFormText, formValidationsConfig }: PropsType) => (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__text-wrapper`)}>
        <Text
          color="black"
          size="h2"
          text={i18next.t(translatedFormText.photoContentTitle)}
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__text-wrapper`)}>
        <Text
          color="black"
          size="h3"
          text={i18next.t(translatedFormText.photoContentText)}
        />
      </div>
      <div
        className={cn(
          `${BLOCK_NAME}__field-wrapper`,
          `${BLOCK_NAME}__field-wrapper--photo-field`,
        )}
      >
        <Field
          allowFormatsPlaceholder={i18next.t(
            translatedFormText.allowFormatsPlaceholder,
          )}
          autoComplete="on"
          component={CustomFormFileUploader}
          name={FORM_FIELD_NAMES.passportDoc}
          placeholder={i18next.t(translatedFormText.passportDocPlaceholder)}
          readOnly={isLoading}
          required
          validate={formValidationsConfig.passportDoc}
        />
      </div>
    </div>
  ),
);
