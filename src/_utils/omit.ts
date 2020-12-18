type ParamsType = {
  key: string;
  object: Record<string, any>;
};

export const getOmittedObject = ({
  key,
  object,
}: ParamsType): Record<string, any> => {
  const { [key]: omitted, ...rest } = object;

  return rest;
};
