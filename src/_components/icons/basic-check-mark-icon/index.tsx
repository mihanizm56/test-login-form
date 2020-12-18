import React, { memo } from 'react';
import { BasicCheckMarkColorType } from './_types';

const colorTypes = {
  disabledColor: '#D1CFD7',
  activeColor: '#FFFFFF',
  defaultColor: '#4E4E53',
};

type PropsType = {
  colorType?: BasicCheckMarkColorType;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const BasicCheckMarkIcon = memo(
  ({
    colorType = 'defaultColor',
    width = '24',
    height = '24',
    viewBox = '-4 -6 24 24',
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
        d="M5.70711 9.29289L15 0L16.4142 1.41421L5.70711 12.1213L0 6.41421L1.41421 5L5.70711 9.29289Z"
        fill={colorTypes[colorType]}
        fillRule="evenodd"
      />
    </svg>
  ),
);
