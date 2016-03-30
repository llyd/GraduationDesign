var querystring = require("querystring");
var url = require("url");
var mysql = require('./mysql');
var mysqlQuery = function(res,userAddSql){
  mysql.query(userAddSql,function(err,result){
      res.end(JSON.stringify(result));
    });
}

// router
module.exports = {
  // '/sayHi': function(req, res){
  //   res.write('this is a message...')
  //   res.end()
  // },
  // '/upload': function(req, res){
  //   res.end('recive file')
  // },
  '/Siteadmin/getManagers': function(req,res){
    var userAddSql = 'select * from manager';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var name = objectQuery.name;
    var password = objectQuery.password;
    var userAddSql = 'insert into manager (name,password) values ("' + name + '","' + password + '")';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from manager where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/Siteadmin/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var name = objectQuery.name;
    var password = objectQuery.password;
    var userAddSql = 'update manager set name = "' + name +'" ,password = "'+password+'" where id = "' + id + '"';
    mysqlQuery(res,userAddSql);
  },
  '/Academy/getData': function(req,res){
  	var userAddSql = 'select * from academy';
    mysqlQuery(res,userAddSql);
  },
  '/Academy/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var classId = objectQuery.classId;
    var className = objectQuery.className;
    var classSize = objectQuery.classSize;
    var spareTime = objectQuery.spareTime;
    var courseName = objectQuery.courseName;
  	var userAddSql = 'insert into academy (classId,className,spareTime,classSize,courseNames) values ("' + name + '","' + password + '","' + spareTime + '","' + classSize + '","' + courseNames + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Academy/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from academy where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Academy/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var classId = objectQuery.classId;
    var className = objectQuery.className;
    var classSize = objectQuery.classSize;
    var spareTime = objectQuery.spareTime;
    var courseName = objectQuery.courseName;
  	var userAddSql = 'update academy set classId = "' + classId +'" ,className = "'+className+'" ,classSize = "'+classSize+'" ,spareTime = "'+spareTime+'" ,courseName = "'+courseName+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/getData': function(req,res){
  	var userAddSql = 'select * from course';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var courseId = objectQuery.courseId;
    var courseName = objectQuery.courseName;
    var courseType = objectQuery.courseType;
    var schedule = objectQuery.schedule;
    var roomTypes = objectQuery.roomTypes;
    var teacherNames = objectQuery.teacherNames;
    var isOrNotHeban = objectQuery.isOrNotHeban;
  	var userAddSql = 'insert into course (courseId,courseName,courseType,schedule,roomTypes,teacherNames,isOrNotHeban) values ("' + courseId + '","' + courseName + '","' + courseType + '","' + schedule + '","' + roomTypes + '","' + teacherNames + '","' + isOrNotHeban + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from course where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Course/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var courseId = objectQuery.courseId;
    var courseName = objectQuery.courseName;
    var courseType = objectQuery.courseType;
    var schedule = objectQuery.schedule;
    var roomTypes = objectQuery.roomTypes;
    var teacherNames = objectQuery.teacherNames;
    var isOrNotHeban = objectQuery.isOrNotHeban;
  	var userAddSql = 'update course set courseId = "' + courseId +'" ,courseName = "'+courseName+'" ,courseType = "'+courseType+'" ,schedule = "'+schedule+'" ,roomTypes = "'+roomTypes+'" ,teacherNames = "'+teacherNames+'" ,isOrNotHeban = "'+isOrNotHeban+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/getData': function(req,res){
  	var userAddSql = 'select * from room';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var roomId = objectQuery.roomId;
    var roomName = objectQuery.roomName;
    var roomSize = objectQuery.roomSize;
    var roomType = objectQuery.roomType;
    var emptyTime = objectQuery.emptyTime;
  	var userAddSql = 'insert into room (roomId,roomName,roomSize,roomType,emptyTime) values ("' + roomId + '","' + roomName + '","' + roomSize + '","' + roomType + '","' + emptyTime + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from room where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Room/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var roomId = objectQuery.roomId;
    var roomName = objectQuery.roomName;
    var roomSize = objectQuery.roomSize;
    var roomType = objectQuery.roomType;
    var emptyTime = objectQuery.emptyTime;
  	var userAddSql = 'update room set roomId = "' + roomId +'" ,roomName = "'+roomName+'" ,roomSize = "'+roomSize+'" ,roomType = "'+roomType+'" ,emptyTime = "'+emptyTime+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/getData': function(req,res){
  	var userAddSql = 'select * from teacher';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/addData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var teacherId = objectQuery.teacherId;
    var teacherName = objectQuery.teacherName;
    var teacherSex = objectQuery.teacherSex;
    var teacherTitle = objectQuery.teacherTitle;
    var workload = objectQuery.workload;
    var haveWorked = objectQuery.haveWorked;
    var idleTime = objectQuery.idleTime;
  	var userAddSql = 'insert into teacher (teacherId,teacherName,teacherSex,teacherTitle,workload,haveWorked,idleTime) values ("' + teacherId + '","' + teacherName + '","' + teacherSex + '","' + teacherTitle + '","' + workload + '","' + haveWorked + '","' + idleTime + '")';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/deleteData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var userAddSql = 'delete from teacher where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },
  '/Teacher/changeData': function(req,res){
    var objectUrl = url.parse(req.url);
    var objectQuery = querystring.parse(objectUrl.query);
    var id = objectQuery.id;
    var teacherId = objectQuery.teacherId;
    var teacherName = objectQuery.teacherName;
    var teacherSex = objectQuery.teacherSex;
    var teacherTitle = objectQuery.teacherTitle;
    var workload = objectQuery.workload;
    var haveWorked = objectQuery.haveWorked;
    var idleTime = objectQuery.idleTime;
  	var userAddSql = 'update teacher set teacherId = "' + teacherId +'" ,teacherName = "'+teacherName+'" ,teacherSex = "'+teacherSex+'" ,teacherTitle = "'+teacherTitle+'" ,workload = "'+workload+'" ,haveWorked = "'+haveWorked+'" ,idleTime = "'+idleTime+'" where id = "' + id + '"';
  	mysqlQuery(res,userAddSql);
  },

}
