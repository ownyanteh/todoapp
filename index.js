import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';
import cors from 'cors';
// import 'dotenv/config'

// connect to database
await mongoose.connect(process.env.TODO_URI);

// create an express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors())

// use routes
app.use(todoRouter, userRouter);
// app.use(userRouter);

// listen for incoming request
app.listen(3030, () => {
    console.log('App is listening on port 3030!')
});