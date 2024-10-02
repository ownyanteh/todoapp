import express from 'express';
import todoRouter from './routes/todo.js';

// create an express app
const app = express();

// use routes
app.use(todoRouter);

// listen for incoming request
app.listen(3030, () => {
    console.log('App is listening on port 3030!')
});