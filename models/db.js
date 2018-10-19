var mysql = require('mysql');
var connection;

function connectionDB()
{
	connection=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"",
		database:"crud_node"
	});

	connection.connect(function(err){
		if(err)
		{
			console.log(err.stack);

		}
		else
		{
			console.log("Successfully connected...");
		}
	});
}

module.exports={

	execute:function(sql,params,callback){
		connectionDB();
		if(params==null)
		{
			connection.query(sql,function(error,status){
				if(error)
				{
					console.log(error.stack);
					callback(status);
				}
				else
				{
					callback(status);
				}
			});
		}
		else
		{
			connection.query(sql,params,function(error,status){
				if(error)
				{
					console.log(error.stack);
					callback(status);
				}
				else
				{
					callback(status);
				}
			});
		}

		connection.end(function(){
			console.log("closed");
		});

	}
}