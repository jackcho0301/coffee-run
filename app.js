require('dotenv').config();
require('express-async-errors'); //no need for async wrapper for controller

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const usersRouter = require('./routes/users');


//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send('hi!');
});

app.use('/api/v1/users', usersRouter);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //connect db
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();