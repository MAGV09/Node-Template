// middleware/validateRequest.js
const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.locals.validationErrors = errors.array();
    res.locals.formData = req.body;
  }
  next();
};

module.exports = validateRequest;
