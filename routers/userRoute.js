const { Router } = require('express');
const userController = require('../controllers/userController');


let userRoute = Router();

userRoute.get('/signup', userController.UserSignup);

userRoute.get('/login', userController.UserLogin);

module.exports = userRoute;