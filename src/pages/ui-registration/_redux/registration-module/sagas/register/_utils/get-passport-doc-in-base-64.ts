import { blobToPureBase64 } from '@wildberries/redux-core-modules';

type OutputType = {
  contentType: string;
  filename: string;
  data: any;
};

export const getPassportDocInBase64 = async (
  file: File,
): Promise<OutputType> => {
  const data = await blobToPureBase64(file);
  const contentType = file.type;
  const filename = file.name;

  return {
    contentType,
    filename,
    data,
  };
};
