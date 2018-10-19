var express = require('express');
var router = express.Router();
var userModel=require.main.require('./models/user-model');
var jquery = require('jquery');
var JSAlert = require("js-alert");


router.get('/',function(req,res){
	userModel.getAll(function(result){
		if(result.length>0){
			res.render('home/home',{list: result});
			//console.log(result[0]);
		}
		else
		{
			res.redirect('/login');
		}
	});
	
});


module.exports=router;