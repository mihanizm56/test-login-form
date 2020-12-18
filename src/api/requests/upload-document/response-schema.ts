import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  documentID: Joi.string().required(),
});
