var mysql = require('./mysql');
// rotuer
module.exports = {
  '/sayHi': function(req, res){
    res.write('this is a message...')
    res.end()
  },
  '/upload': function(req, res){
    res.end('recive file')
  },
  '/Academy/getData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Academy/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Academy/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Academy/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Course/getData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Course/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Course/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Course/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Room/getData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Room/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Room/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Room/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Teacher/getData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Teacher/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Teacher/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },
  '/Teacher/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysql.query(userAddSql,function(results){

		});
	  res.end(results);
  },

}
