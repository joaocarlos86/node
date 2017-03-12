const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const db = require('./config/db.js');

app.use(bodyParser.urlencoded({extended: true}));

mongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('...here we go. Port : ' + port);
  });

});
