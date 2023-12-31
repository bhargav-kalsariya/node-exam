const express = require('express');
const { dbConnect } = require('./config/dbConnect');
const userRoute = require('./routers/userRoute');
const session = require('express-session');
const cors = require('cors');

require('dotenv').config();

let app = express();

app.use(session({

    secret: 'secret',
    resave: false,
    saveUninitialized: false

}))

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));
app.use(express.urlencoded({ extended: true }));
dbConnect();

app.use('/api/auth', userRoute);

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log(port);
});