const express = require("express");
const cors = require("cors");
const connectDB = require("./mongoConnect");
const app = express();

connectDB()
.then(() => {
    console.log('db 연결 성공');

    app.use(express.json());
    app.use(cors());

    app.listen(6000, () => console.log("Server is running at 6000"));
})
.catch((err) => {
    console.error('db 연결 오류: ', err);
    // 오류 발생하면 종료
    process.exit(1);
})

