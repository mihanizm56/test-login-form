import React, { FC, ComponentType, FunctionComponent } from 'react';
import {
  NavigationPlusIcon,
  NavigationCloseMediumSmallerIcon,
  BasicMenuIcon,
} from '@/_components/icons';
import { ButtonVariant } from '../_types';

type ParamsType = {
  variant?: ButtonVariant;
  adaptiveMenu?: boolean;
  adaptiveClose?: boolean;
  Icon?: ComponentType<any> | FC<any> | FunctionComponent<any>;
};

export const getIcon = ({
  variant,
  adaptiveMenu,
  adaptiveClose,
  Icon,
}: ParamsType) => {
  if (variant === 'add') {
    return <NavigationPlusIcon />;
  }
  if (variant === 'adaptive' && adaptiveMenu) {
    return <BasicMenuIcon colorType="menuColor" />;
  }
  if (variant === 'adaptive' && adaptiveClose) {
    return <NavigationCloseMediumSmallerIcon colorType="menuColor" />;
  }
  if (variant === 'adaptive' && !adaptiveMenu && !adaptiveClose) {
    return '';
  }

  return Icon ? <Icon /> : '';
};
