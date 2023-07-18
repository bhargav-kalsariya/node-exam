const mongoose = require('mongoose');

exports.dbConnect = async () => {

    try {

        mongoose.connect(process.env.dbURL);
        console.log('Connected to MongoDB');

    } catch (error) {

        console.log(error);

    }

};
