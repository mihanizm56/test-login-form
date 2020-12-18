import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  countries: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      value: Joi.string().required(),
      label: Joi.string().required(),
    }),
  ),
});
