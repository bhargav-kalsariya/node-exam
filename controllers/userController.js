const UserSignup = (req, res) => {

    let user = ({

        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    });


    console.log(user);
    res.send(user);

}

module.exports = { UserSignup };