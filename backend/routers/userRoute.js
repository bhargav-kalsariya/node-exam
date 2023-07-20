const userController = require('../controllers/userController');
const { jwt_authenticate } = require('../middlewares/jwt');

const userRoute = require('express').Router();

userRoute.post('/register', userController.userSignup);

userRoute.post('/login', userController.userLogin);

userRoute.get('/user', jwt_authenticate, userController.userDetails);


module.exports = userRoute;