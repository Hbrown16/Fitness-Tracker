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
