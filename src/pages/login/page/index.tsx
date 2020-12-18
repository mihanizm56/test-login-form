import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Page';

export const Page = memo(() => (
  <div className={cn(`${BLOCK_NAME}`)}>{/* <LoginForm /> */}</div>
));
