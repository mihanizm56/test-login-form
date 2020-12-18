import { RegistrationFormDataType } from '@/pages/ui-registration/page/_components/connected-registration-form/_types';

type OutputType = {
  formErrors?: Partial<RegistrationFormDataType>;
  message?: string;
};

export const getErrorData = (error: any): OutputType => {
  try {
    const formErrors = JSON.parse(error.message);

    return { formErrors };
  } catch {
    return { message: error.message };
  }
};
