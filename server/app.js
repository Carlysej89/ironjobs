
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use('/job', require('./routes/job.routes.js'));

app.listen(3000, function doSomethingOnceServerIsUp() {
  console.log('Server is up!');
});
