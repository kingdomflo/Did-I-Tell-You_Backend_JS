const { body } = require('express-validator');

const relationshipValidationRules = () => {
  return [
    body('name')
      .exists({ checkNull: true, checkFalsy: true }).withMessage('Name field is required')
      .isString().withMessage('Must be a text')
      .isLength({ max: 50 }).withMessage('Can have maximum 50 characters'),
  ]
}

module.exports = {
  relationshipValidationRules
}
