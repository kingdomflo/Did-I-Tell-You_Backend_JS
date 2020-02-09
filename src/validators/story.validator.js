const { body } = require('express-validator');

const storyValidationRules = () => {
  return [
    body('text')
      .exists({ checkNull: true, checkFalsy: true }).withMessage('Text field is required')
      .isString().withMessage('Must be a text'),
  ]
}

module.exports = {
  storyValidationRules
}
