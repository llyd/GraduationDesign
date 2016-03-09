/**
 * CourseArrangeController
 *
 * @description :: Server-side logic for managing Coursearranges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var arrangeCourse =require('../services/arrangeCourse');

module.exports = {
	findHebans: function (req, res) {
	    return res.jsonp({
	     hebans:'[{"courseId":1,"courseName":2,"courseType":6,"numOfStu":""},{"courseId":2,"courseName":2,"courseType":6,"numOfStu":""}]'
	    });
    },
    findCourses: function(req, res) {
    	return res.jsonp({
    		courses:'[{"courseId":1,"courseName":2,"class":6,"teacherName":3},{"courseId":2,"courseName":2,"class":6,"teacherName":3}]'
    	});
    },
    startArrange: function(req,res) {
        var data = arrangeCourse.arrangeCourse();
    	return res.jsonp({
    		UnArrangeCourses : data.UnArrangeCourses
    	});

    }

	
};
