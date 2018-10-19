var db = require('./db');


module.exports= {


	getAll:function(callback)
	{
		var sql="SELECT * from crud";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	insert:function(user,callback)
	{
		var sql="INSERT INTO crud VALUES(null,?,?,?,?)";	
		db.execute(sql,[user.password,user.cpass,user.username,user.typee],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	}

}