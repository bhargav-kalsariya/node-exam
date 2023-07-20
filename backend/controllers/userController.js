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
        let users = await userSchema.findOne({ username, password });

        if (users) {

            const token = jwt.sign({ user: users }, secretkey);
            res.status(200).json({ token });

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
        res.json({ user });

    } catch (error) {

        console.log(error);
        res.status(500).json({ error });

    }

};