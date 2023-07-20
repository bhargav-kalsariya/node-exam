const jwt = require('jsonwebtoken');
require('dotenv').config();

let secretkey = process.env.jwt;

exports.jwt_authenticate = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {

        return res.sendStatus(401);

    }

    jwt.verify(token, secretkey, (err, user) => {

        if (err) {

            return res.sendStatus(403);

        }

        req.user = user;
        // console.log(req.user);
        next();

    });

};