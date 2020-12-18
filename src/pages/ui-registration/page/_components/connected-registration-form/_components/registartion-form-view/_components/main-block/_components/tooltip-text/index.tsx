import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import styles from './index.module.scss';

const BLOCK_NAME = 'Tooltip-text';

const cn = classnames.bind(styles);

type PropsType = {
  text: string;
};

export const TooltipText = memo(({ text }: PropsType) => (
  <div className={cn(BLOCK_NAME)}>
    <Text color="white" size="h6" text={text} />
  </div>
));
