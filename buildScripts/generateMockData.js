/* eslint-disable no-console */


import jsf from "json-schema-faker";

import { schema } from "./mockDataSchema";

import fs from "fs";

import chalk from "chalk";

chalk.enabled = true;

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
    err ? console.log(chalk.red(err)) : console.log(chalk.green('Mock data Generated'));
})