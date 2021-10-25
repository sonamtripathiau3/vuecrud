const router = require('express').Router();
const authController = require('../../controllers/auth');
router.post('/register', authController.Signup);
router.post('/login',authController.Signin)


module.exports = {
  router: router,
  basePath: '/'
};