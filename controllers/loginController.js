var express = require('express');
var router = express.Router();
var userModel=require.main.require('./models/user-model');
var jquery = require('jquery');
var JSAlert = require("js-alert");


router.get('/',function(req,res){
	res.render('login/index');
});

router.get('/login',function(req,res){
	res.render('login/loginn');
});

router.get('/registration',function(req,res){
	res.render('login/registration');
});

router.post('/registration',function(req,res){
	var user={
		password:req.body.Password,
		cpass:req.body.Confirm_Password,
		username:req.body.namee,
		typee:req.body.User_Type
	};

	userModel.insert(user,function(status){
		if(status)
		{
			//JSAlert.alert("Inserted");
			res.send('Inserted');
			//JSAlert.alert("This will only last 10 seconds").dismissIn(1000 * 10);
		}
		else
		{
			res.send('Error in adding...');
		}
	});
});

module.exports=router;