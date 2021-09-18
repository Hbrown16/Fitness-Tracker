const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.Port || 3000;
const app = express();
require('dotenv').config();
