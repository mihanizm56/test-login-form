import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  legalForms: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      value: Joi.string().required(),
      title: Joi.string().required(),
    }),
  ),
});
