import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedRegistrationForm } from './_components/connected-registration-form';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Form-page';

export const Page = memo(() => (
  <div className={cn(`${BLOCK_NAME}`)}>
    <ConnectedRegistrationForm />
  </div>
));
