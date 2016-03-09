

var mysql = require('mysql');
//创建一个connection
var connection = mysql.createConnection({
	host:'192.168.26.239',
	user:'root',
	password:'raspberry',
	port:'3306',
	database:'graduation'
});

//创建一个connection
connection.connect(function(err){
	if(err){
		console.log('[query] - :'+err);
		return;
	}
	console.log('[connection connect] succeed!');
});
var userAddSql = 'select * from article';
//执行sql语句
connection.query(userAddSql,function(err,results){
	if(err){
		console.log('[select error] - :'+err.message);
		return;		
	}
	console.log('select: ', results);
});
//关闭connection

connection.end(function(err){
	if(err){
		return;
	}
	console.log('[connection end] succeed!');
});