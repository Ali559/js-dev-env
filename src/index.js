import numeral from "numeral";

import './index.css'

const courseValue = numeral(1000).format('$0,0.00');

/* eslint-disable no-console */

console.log(`I would likke to pay ${courseValue} for this awesome course`);