const { Router } = require('express');
const indexRouter = Router();
const {
  getHomepage,
  getAbout,
  getContact,
  postContact,
} = require('../controllers/indexController');

indexRouter.get('/', getHomepage);

indexRouter.get('/about', getAbout);

indexRouter.get('/contact', getContact);

indexRouter.post('/contact', postContact);

module.exports = indexRouter;
