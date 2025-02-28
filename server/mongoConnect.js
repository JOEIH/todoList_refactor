const mongoose = require('mongoose');

// 환경변수 가져오기 위해 작성
require("dotenv").config({path: ".env"});

const mongoURI = process.env.MONGODB_URL

const connectDB = () => {
    return mongoose.connect(mongoURI)
}

module.exports = connectDB;