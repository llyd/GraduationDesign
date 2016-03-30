/**
 * AcademyController
 *
 * @description :: Server-side logic for managing academies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var mysql = require('../services/mysql.js');

module.exports = {
	findData: function (req, res) {
		 back var userAddSql = 'select * from academy';
			var data = mysql.execSql(userAddSql);
	    return res.jsonp({
	     academys:data
	    });
    },
};

