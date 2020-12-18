import React from 'react';
import { BasicMenuColorType } from './_types';

const colorTypes = {
  menuColor: '#FFFFFF',
  defaultColor: '#4E4E53',
};

type PropsType = {
  colorType?: BasicMenuColorType;
};

export const BasicMenuIcon = ({ colorType = 'defaultColor' }: PropsType) => (
  <svg
    fill="none"
    height="24"
    viewBox="-2 -5 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z"
      fill={colorTypes[colorType]}
      fillRule="evenodd"
    />
  </svg>
);
