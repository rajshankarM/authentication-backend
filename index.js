const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRouter = require('./userRouter');
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.use('/api', userRouter);

app.listen(5000, () => {
    console.log("localhost connected successfully");
})

mongoose.connect('mongodb://localhost:27017/userAuth', () => {
    console.log("server connected successfully");
})