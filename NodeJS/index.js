const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json());

const { mongoose } = require('./db.js');

//var employeeController = require('./controllers/employeeController');
var userController = require('./controllers/users');
var usersofdevice =require('./controllers/userofdevice');



app.use(cors({ origin: 'http://localhost:4200' }));


//app.use('/', employeeController);
app.use('/user' ,userController);
app.use('/usersofdevice',usersofdevice)
app.listen(3000, () => console.log('Server started at port : 3000'));