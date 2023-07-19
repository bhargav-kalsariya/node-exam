const userController = require('../controllers/userController');

const userRoute = require('express').Router();

userRoute.post('/auth/register', userController.userSignup);

userRoute.post('/auth/login', userController.userLogin);

module.exports = userRoute;