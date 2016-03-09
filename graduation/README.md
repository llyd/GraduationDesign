# GraduationDesign

//classes班级
//classId:班级编号 201201
//className:班级名称
//classSize:班级人数
//spareTime:[]班级空余时间
//courseId:开设课程代号
//courseName:开设课程名称
//teacher:相应课程的授课老师
////flag:是否已经排课

//排课数据表
[{classId:"",className:"",classSize:"",spareTime:"",courses:[{courseId:"",courseName:"",courseType:"",schedule:"",teacherId:"",teacherName:"",classInfos:[{roomId:"",roomName:"",time:""},{roomId:"",roomName:"",time:""}]},{courseId:"",courseName:"",courseType:"",schedule:"",teacherId:"",teacherName:"",classInfos:[{roomId:"",roomName:"",time:[]},{roomId:"",roomName:"",time:""}]}]},
{classId:"",className:"",classSize:"",spareTime:"",courses:[{courseId:"",courseName:"",courseType:"",schedule:"",teacherId:"",teacherName:"",classInfos:[{roomId:"",roomName:"",time:""},{roomId:"",roomName:"",time:""}]},{courseId:"",courseName:"",courseType:"",schedule:"",teacherId:"",teacherName:"",classInfos:[{roomId:"",roomName:"",time:""},{roomId:"",roomName:"",time:""}]}]

//courses课程
//courseId:教学计划号，课程编号
//courseName:课程名称
//courseType:课程类型(课程重要性)
//schedule:学分（周课时？）
//roomType:可用教室类型
////grade:年级
////class:班级合班怎么办？
////teacherId:授课教师id
////teacherName:授课教师
////students:学生数量

//rooms []教室
//roomId:教室编号
//roomName:教室名称
//roomSize:座位数
//roomType:教室类型
//emptyTime:[T1,T2,T3...T25]:教室为空，可以用的时间段

//teachers教师
//teacherId:教工号
//teacherName:教师姓名
//teacherSex:性别
//teacherTitle:职称
//workload:预定工作量
//residualWorkload剩余工作量
//courseId:可授课课程id
//courseName:可授课课程名称
//课程标志
//idleTime:空闲时间段[]
	
	courseArrange.prototype.selectedCourse = function(className) {
		var classes = this.classes;
		var selectClass = "";
		for(var class_obj in classes){
			if(class_obj.className == className && class_obj.flag == 0){
				selectClass = class_obj;
				var a = classes.indexOf(class_obj);//从数组中删除待排课的那一项
				if (a >= 0) { 
					classes.splice(a, 1); 
				} 
				break;
			}
		}
		return selectClass;
	};



# Vue.js HackerNews clone

[Live demo](http://vuejs.github.io/vue-hackernews/)

Built with [Vue.js](http://vuejs.org), [vue-router](https://github.com/vuejs/vue-router) and the official [HackerNews API](https://github.com/HackerNews/API), with routing, comments, comment folding, user profile & realtime updates.

The build setup uses [Webpack](http://webpack.github.io/) and the [vue-loader](https://github.com/vuejs/vue-loader) plugin, which enables Vue components to be written in a format that encapsulates a component's style, template and logic in a single file.

If you are using SublimeText you can get proper syntax highlighting for `*.vue` files with [vue-syntax-highlight](https://github.com/vuejs/vue-syntax-highlight).

### Building

``` bash
npm install
# watch:
npm run dev
# build:
npm run build
```

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm test
