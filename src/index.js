const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const config = require('./config/config');

const {sequelize} = require('./models');


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app); //routes for the endpoints

sequelize.sync().then(()=> {
  app.listen(config.port);
  console.log(`Server listening on http://localhost:${config.port}`);
})


