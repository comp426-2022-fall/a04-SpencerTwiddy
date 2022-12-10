const express = require('express');
const minimist = require('minimist');
var options = minimist(process.argv.slice(2));
const app = express();
let port = 5000;
if (options.port !== undefined) {
	port = options.port;
}
app.get('/app/', (req, res, next) => {
	res.status(200).send('200 OK');
});

app.get('*', function(req, res){
  res.status(404).send('404 NOT FOUND');
});
app.listen(port, ()=>{});