const express = require('express');
const { dbConnect } = require('./config/dbConnect');
const userRoute = require('./routers/userRoute');
require('dotenv').config();

// use of module //

let app = express();
let port = process.env.port || 3000;
app.use(express.json());
dbConnect();

// routers //

app.use('/users', userRoute)

// listen app //

app.listen(port, () => {
    console.log('listening on port ' + port);
});