<template>
<div><span @click="addData()">添加</span></div>
	<table>
		<tr>
			<td>教工号</td>
			<td>教师姓名</td>
			<td>教师性别</td>
			<td>职称</td>
			<td>预定工作量</td>
			<td>已用工作量</td>
			<td>空闲时间段</td>

			<td>操作</td>
		</tr>
		<tr v-for="teacher in teachers">
			<td>{{teacher.teacherId}}</td>
			<td>{{teacher.teacherName}}</td>
			<td>{{teacher.teacherSex}}</td>
			<td>{{teacher.teacherTitle}}</td>
			<td>{{teacher.workload}}</td>
			<td>{{teacher.haveWorked}}</td>
			<td>{{teacher.idleTime}}</td>
			<td><span @click="changeData(teacher.id)">修改</span><span @click="deleteData(teacher.id)">删除</span></td>
		</tr>
	</table>

</template>

<script>

module.exports = {
	data: function () {
		return {
			teachers: null

		}
	},
	ready: function () {
		this.getTeachers()
	},
	methods: {
		getTeachers: function () {
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Teacher/find",
				dataType:"jsonp",
				success:function(json){
					if (json || json.teachers.length > 0){
						self.teachers =  JSON.parse(json.teachers);
					}				
				}
			});

		},
		addData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Teacher/add",
				dataType:"jsonp",
				success:function(json){
					if (json || json.teachers.length > 0){
						self.teachers =  JSON.parse(json.teachers);
					}				
				}
			});

		},
		deleteData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Teacher/delete",
				dataType:"jsonp",
				success:function(json){
					if (json || json.teachers.length > 0){
						self.teachers =  JSON.parse(json.teachers);
					}					
				}
			});
		},
		changeData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Teacher/change",
				dataType:"jsonp",
				success:function(json){
					if (json || json.teachers.length > 0){
						self.teachers =  JSON.parse(json.teachers);
					}				
				}
			});
		}

	}

}
</script>
