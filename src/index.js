const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const User = require ("./database");

//create the table with User if not exists
const createUserModel = async()=>{
  await User.sync();
}
createUserModel();

async function createNewUser(userName,firstName,lastName){
  try{
  let newUser = User.build({userName:userName, firstName:firstName, lastName:lastName})
  await newUser.save();
  console.log(`New user '${userName}' was created. id:'${last.id}'`)
  } catch(error){
    console.error(error);
  }
}

createNewUser('rajesh', 'Rajesh', 'Dhakal');

app.use(morgan('combined'));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

//a simple get request
app.get('/', (req,res) => {
    res.status(200).send({
      message: 'Hello My World'
  });
});

app.get('/users', (req,res)=>{
  res.status(200).send({
    message:'Users'
  })
})

const port = process.env.PORT || 8082;
app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`);
});