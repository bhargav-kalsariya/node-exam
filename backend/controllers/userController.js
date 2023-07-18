const { userSchema } = require('../models/userShema');

exports.userSignup = async (req, res) => {

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

};
