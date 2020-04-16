import express from "express";

import open from "open";

import { join } from "path";

import webpack from "webpack";

import config from "../webpack.config.dev.js";

/* eslint-disable no-console */

const port = 3000;

const app = express();

const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../src/index.html'))
});

app.get('/users', (req, res) => {
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "Barker", "email": "bobbarker61@gmail.com" },
        { "id": 2, "firstName": "Johnny", "lastName": "Sins", "email": "johnysins32@gmail.com" },
        { "id": 3, "firstName": "jane", "lastName": "Austin", "email": "janeaustin22@gmail.com" }
    ]);
})


app.listen(port, (err) => {
    err ? console.log(err) : open(`http://localhost:${port}`);
})



//http://blue-pig-78.serverless.social