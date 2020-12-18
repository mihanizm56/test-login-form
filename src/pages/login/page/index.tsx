import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { ConnectedLoginForm } from './_components/connected-login-form';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Page';

export const Page = memo(() => (
  <div className={cn(`${BLOCK_NAME}`)}>
    <ConnectedLoginForm />
  </div>
));
