var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
	res.render('login/index');
});

router.get('/login',function(req,res){
	res.render('login/loginn');
});

router.get('/registration',function(req,res){
	res.render('login/registration');
});

module.exports=router;