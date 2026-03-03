require('dotenv').config(); 
const config = require('./cofig.json');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const User = require('./models/User');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));

mongoose.connect(config.connectionstring);

//test api
app.get("/hello" ,async (req, res) => {
return res.status(200).json({message : " hello buddy whatsUp"});
})
app.listen(8000);
module.exports = app;