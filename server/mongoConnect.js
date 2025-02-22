const mongoose = require('mongoose');

// 환경변수 가져오기 위해 작성
require("dotenv").config();

const mongoURI = process.env.MONGODB_URL

const connectDB = () => {
    return mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;