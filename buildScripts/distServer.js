import express from "express";

import open from "open";

import { join } from "path";

import compression from 'compression';
/* eslint-disable no-console */

const port = 3000;

const app = express();

app.use(compression());

app.use(express.static('dist'));



app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../src/index.html'))
});




app.listen(port, (err) => {
    err ? console.log(err) : open(`http://localhost:${port}`);
})



//http://blue-pig-78.serverless.social