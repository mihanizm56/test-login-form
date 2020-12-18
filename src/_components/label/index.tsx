import React, { FC, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

type LabelPropsType = {
  children: string;
  disabled?: boolean;
  htmlFor: string;
  required?: boolean;
};

export const Label: FC<LabelPropsType> = memo(
  ({ children, disabled, htmlFor, required }: LabelPropsType) => (
    <label
      className={cn('Label', {
        'Label--required': required,
        'Label--disabled': disabled,
      })}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  ),
);
