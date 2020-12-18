import Joi from '@hapi/joi';

export const responseSchema = Joi.object({
  supplierID: Joi.string().required(),
});
