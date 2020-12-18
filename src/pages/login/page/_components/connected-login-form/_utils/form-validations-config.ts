import { SimpleValidator, composeValidators } from '@wildberries/validators';

const simpleFieldValidator = new SimpleValidator();
// const patternFieldValidator = new PatternValidator();

export const FORM_VALIDATIONS_CONFIG = {
  login: composeValidators([
    simpleFieldValidator.requiredValidator('Поле обязательно к заполнению'),
    simpleFieldValidator.minLenghtValidate(
      3,
      'Логин должен содержать минимум 3 символа',
    ),
    simpleFieldValidator.maxLenghtValidate(
      22,
      'Логин должен содержать не более 22 символов',
    ),
  ]),
  password: composeValidators([
    simpleFieldValidator.requiredValidator('Поле обязательно к заполнению'),
    simpleFieldValidator.minLenghtValidate(
      6,
      'Пароль должен содержать минимум 6 символов',
    ),
    simpleFieldValidator.maxLenghtValidate(
      20,
      'Пароль должен содержать не более 20 символов',
    ),
  ]),
};
