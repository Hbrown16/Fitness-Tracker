const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.Port || 3000;
const app = express();
require('dotenv').config();
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/', {
    useNewUrlParse: true,
    useUnifiedTopogy: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require("../Develop/Routes/api routes"))
app.use(require("../Develop/Routes/HTML routes"))
app.listen(PORT, () => {
    console.log("App is working on PORT 3000")
})