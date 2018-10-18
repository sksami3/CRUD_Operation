//Declearation
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var loginController = require('./controllers/loginController')


//Config
app.set('view engine','ejs');


//MiddlewARE	
app.use(bodyParser.urlencoded({extended:false}));


//Routes
app.use('/',loginController);
app.use('/login',loginController);


//Server Start
app.listen(3000,function(){
	console.log("app started at 3000")
});