const { userSchema } = require('../models/userShema');

exports.userSignup = async (req, res) => {

    let user = ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    let existingUser = await userSchema.findOne({ username: req.body.username });

    if (existingUser) {

        return res.send({ message: 'User already exists' });

    };

    await userSchema.create(user);

    res.send(user);

};
