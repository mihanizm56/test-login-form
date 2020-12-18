import { CircleIcon, NavigationQuestionGreyIcon } from '@wildberries/ui-kit';
import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const BLOCK_NAME = 'Question-icon';

const cn = classnames.bind(styles);

export const QuestionIcon = memo(() => (
  <div className={cn(BLOCK_NAME)}>
    <CircleIcon color="lightGreyColor" size="S">
      {() => <NavigationQuestionGreyIcon size="S" />}
    </CircleIcon>
  </div>
));
