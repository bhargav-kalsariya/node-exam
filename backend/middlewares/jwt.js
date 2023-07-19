const jwt = require('jsonwebtoken');
require('dotenv').config();

let secretkey = process.env.jwt;

exports.jwt_authenticate = (req, res, next) => {

    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split('')[1];

    if (token == null) {

        return res.sendStatus(401);

    }

    jwt.verify(token, secretkey, (err, user) => {

        if (err) {

            return res.sendStatus(401);

        }

        req.user = user;
        next();

    });

};