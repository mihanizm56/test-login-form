export const getIsValueEmpty = <ValueType>(value: ValueType): boolean => {
  if (typeof value === 'object') {
    if (value instanceof Array) {
      return value.length === 0;
    }

    return !Boolean(Object.keys(value).length);
  }

  return !Boolean(value);
};
