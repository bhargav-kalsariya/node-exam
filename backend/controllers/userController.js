const { userSchema } = require('../models/userShema');
require('dotenv').config();

const jwt = require('jsonwebtoken');
const secretkey = process.env.jwt;

exports.userSignup = async (req, res) => {

    try {

        let user = ({

            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        });

        let messageforfrontend = '';
        let existingUser = await userSchema.findOne({ username: req.body.username });

        if (existingUser) {

            messageforfrontend = "user already exists";

        }
        else {

            await userSchema.create(user);
            messageforfrontend = 'user created successfully';

        }


        res.status(201).json({ messageforfrontend });

    } catch (error) {

        console.log(error);
        res.status(500).json({ messageforfrontend: error });

    };

};

exports.userLogin = async (req, res) => {

    try {

        let { username, password } = req.body;
        let user = await userSchema.findOne({ username, password });

        if (user) {

            const token = jwt.sign(user.id, secretkey);
            res.status(200).json({ accessToken: token });

        } else {

            res.status(401).json({ messageforfrontend: 'username or password is incorrect' });

        }


    } catch (error) {

        console.log(error);
        res.status(500).json({ error });

    };

};

exports.userDetails = async (req, res) => {

    try {

        let user = req.user;
        let findUser = await userSchema.findById(user);

        if (findUser) {

            res.json(findUser);

        } else {

            res.json({ error: 'User not found' });

        }


        console.log(user, findUser);

    } catch (error) {

        console.log(error);
        res.status(500).json({ error });

    }

};