import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  result: Joi.string().required(),
});
