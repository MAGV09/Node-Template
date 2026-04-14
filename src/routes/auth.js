const { Router } = require('express');
const authRouter = Router();
const passport = require('../config/passport');
const {
  getSignUpPage,
  createUser,
  getLoginPage,
  handleLogin,
} = require('../controllers/Auth.controller');
const { redirectIfAuthenticated } = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');
const { signUpValidation, loginValidation } = require('../validation/auth');

authRouter.get('/sign-up', redirectIfAuthenticated, getSignUpPage);

authRouter.post('/sign-up', signUpValidation, validateRequest, createUser);

authRouter.get('/login', redirectIfAuthenticated, getLoginPage);

authRouter.post(
  '/login',
  loginValidation,
  validateRequest,
  handleLogin,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true,
  }),
);

authRouter.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  });
});

module.exports = authRouter;
