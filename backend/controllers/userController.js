const { userSchema } = require('../models/userShema');

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
        res.status(500).json({ error: error });

    };

};

exports.userLogin = async (req, res) => {

    try {

        let messageforfrontend = '';
        let users = await userSchema.find();
        let checkuser = users.find(user => user.username === req.body.username && user.password === req.body.password);

        if (checkuser) {

            messageforfrontend = 'you are now logged in';

        } else {

            messageforfrontend = 'username or password is incorrect';

        }

        res.status(200).json({ messageforfrontend });

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: error });

    };

};