<template>
<div><span @click="addData()">添加</span></div>
	<table>
		<tr>
			<td>教学计划号</td>
			<td>课程名称</td>
			<td>课程类型</td>
			<td>学分</td>
			<td>可用教室类型</td>
			<td>是否合班上课</td>
			<td>操作</td>
		</tr>
		<tr v-for="course in courses">
			<td>{{course.courseId}}</td>
			<td>{{course.courseName}}</td>
			<td>{{course.courseType}}</td>
			<td>{{course.schedule}}</td>
			<td>{{course.roomType}}</td>
			<td>{{course.isOrNotHeban}}
			<td><span @click="changeData(course.id)">修改</span><span @click="deleteData(course.id)">删除</span></td>
		</tr>
	</table>

</template>

<script>

module.exports = {
	data: function () {
		return {
			courses: null
		}
	},
	ready: function () {
		this.getCourses()
	},
	methods: {
		getCourses: function () {
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Course/find",
				dataType:"jsonp",
				success:function(json){
					if (json || json.courses.length > 0){
						self.courses =  JSON.parse(json.courses);
					}				
				}
			});
		},
		addData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Course/add",
				dataType:"jsonp",
				success:function(json){
					if (json || json.courses.length > 0){
						self.courses =  JSON.parse(json.courses);
					}				
				}
			});
		},
		deleteData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Course/delete",
				dataType:"jsonp",
				success:function(json){
					if (json || json.courses.length > 0){
						self.courses =  JSON.parse(json.courses);
					}				
				}
			});
		},
		changeData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Course/change",
				dataType:"jsonp",
				success:function(json){
					if (json || json.courses.length > 0){
						self.courses =  JSON.parse(json.courses);
					}				
				}
			});
		}

	}

}
</script>
