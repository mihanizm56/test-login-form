import Joi from '@hapi/joi';

// TODO fix schema
export const responseSchema = Joi.object({
  info: Joi.any().required(),
});
