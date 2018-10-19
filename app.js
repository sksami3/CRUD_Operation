//Declearation
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var loginController = require('./controllers/loginController');
var homeController = require('./controllers/homeController');


//Config
app.set('view engine','ejs');


//MiddlewARE	
app.use(bodyParser.urlencoded({extended:false}));


//Routes
app.use('/',loginController);
app.use('/login',loginController);
app.use('/home',homeController);


//Server Start
app.listen(3000,function(){
	console.log("app started at 3000")
});