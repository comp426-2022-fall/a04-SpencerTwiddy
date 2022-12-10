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
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/app/roll/', (req, res, next) => {
	let outp = JSON.stringify(6, 2, 1);
	if (req.body.sides !== undefined && req.body.dice !== undefined && req.body.rolls !== undefined) {
		outp = JSON.stringify(roll(Number(req.body.sides), Number(req.body.dice), Number(req.body.rolls)));
	}
	res.send(outp);
});
app.post('/app/roll/:sides/', (req, res, next) => {
	let inp1 = req.params.sides;
	let inp2 = 2;
	let inp3 = 1;
	outp = JSON.stringify(roll(inp1, inp2, inp3));
	res.send(outp);
});
app.get('*', function(req, res){
  res.status(404).send('404 NOT FOUND');
});
app.listen(port, ()=>{});