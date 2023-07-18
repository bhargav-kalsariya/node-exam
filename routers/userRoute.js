const { Router } = require('express');
const userController = require('../controllers/userController');


let userRoute = Router();

userRoute.get('/signup', userController.UserSignup);

module.exports = userRoute;