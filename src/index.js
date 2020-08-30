const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//post request
app.post('/register', (req,res) => {
  res.send({
    message: `Thank you for registering with us ${req.body.name}. We will be sending you monthly updates at your email address ${req.body.email}. And fuck we don't care about your privacy so here's your password ${req.body.password}`
  })
})

//a simple get request
app.get('/', (req,res) => {
    res.status(200).send({
      message: 'Hello My World'
  });
});

const port = process.env.PORT || 8082;
app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`);
});