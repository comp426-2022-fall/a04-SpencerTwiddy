import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const express = require('express');
const minimist = require('minimist');
import { roll } from "./lib/roll.js"
var options = minimist(process.argv.slice(2));
const app = express();
let port = 5000;
if (options.port !== undefined) {
	port = options.port;
}
app.get('/app/', (req, res, next) => {
	res.status(200).send('200 OK');
});
app.get('/app/roll/', (req, res, next) => {
	let outp = JSON.stringify(roll(6, 2, 1));
	res.send(outp);
});
app.get('*', function(req, res){
  res.status(404).send('404 NOT FOUND');
});
app.listen(port, ()=>{});