const userController = require('../controllers/userController');

const userRoute = require('express').Router();

userRoute.post('/auth/register', userController.userSignup);

module.exports = userRoute;