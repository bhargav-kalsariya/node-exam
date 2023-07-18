const { userSchema } = require("../models/userShema");

const UserSignup = async (req, res) => {

    let user = ({

        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    });

    let existingUser = await userSchema.findOne({ username: user.username });

    console.log(user, existingUser);

    if (existingUser) {

        res.json({ message: 'User already exists' });

    } else {

        userSchema.create(user);
        res.send(user);

    };

};

const UserLogin = async (req, res) => {

    let checkUser = userSchema.find({ username: req.body.username, password: req.body.password });
    console.log(checkUser);
    res.send(checkUser);

};

module.exports = { UserSignup, UserLogin };