const userController = require('../controllers/userController');

const userRoute = require('express').Router();

userRoute.post('/register', userController.userSignup);

userRoute.post('/login', userController.userLogin);

module.exports = userRoute;