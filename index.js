import express from 'express';

// create an express app
const app = express();

// define routes
app.get('/hello', function (req, res, next) {
console.log(req.headers);
res.json('you visited the hello endpoint')
});

app.get('/goodbye', function (req, res, next) {
console.log(req.query);
res.json ('same to you')
});

// listen for incoming request
app.listen(3030, function () {
    console.log('App is listening on port 3030!')
});