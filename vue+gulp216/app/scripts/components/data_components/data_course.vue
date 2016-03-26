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
				url:"/Course/getData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.courses =  JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			$.ajax({
				url:"/Course/addData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.courses =  JSON.parse(data);
					}				
				}
			});
		},
		deleteData: function () {
			$.ajax({
				url:"/Course/deleteData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.courses =  JSON.parse(data);
					}				
				}
			});
		},
		changeData: function () {
			$.ajax({
				url:"/Course/changeData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.courses =  JSON.parse(data);
					}				
				}
			});
		}

	}

}
</script>
