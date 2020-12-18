import React, { memo } from 'react';
import { BasicMinusColorType } from './_types/index';

const colorTypes = {
  disabledColor: '#D1CFD7',
  activeColor: '#FFFFFF',
  defaultColor: '#4E4E53',
};

type PropsType = {
  colorType?: BasicMinusColorType;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const BasicMinusIcon = memo(
  ({
    colorType = 'defaultColor',
    width = '24',
    height = '24',
    viewBox = '-2 -11 24 24',
  }: PropsType) => (
    <svg
      fill="none"
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20 0V2H0V0H20Z"
        fill={colorTypes[colorType]}
        fillRule="evenodd"
      />
    </svg>
  ),
);
