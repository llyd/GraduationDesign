var mysql = require('./mysql');
var mysqlQuery = function(res,userAddSql){
  mysql.query(userAddSql,function(err,result){
      res.end(JSON.stringify(result));
    });
}

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
    mysqlQuery(res,userAddSql);
  },
  '/Academy/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Academy/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Academy/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/getData': function(req,res){
  	var userAddSql = 'select * from course';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/getData': function(req,res){
  	var userAddSql = 'select * from room';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/getData': function(req,res){
  	var userAddSql = 'select * from teacher';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/addData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/deleteData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/changeData': function(req,res){
  	var userAddSql = 'select * from academy';
  	mysqlQuery(res,userAddSql);
  },

}
