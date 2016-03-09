<template>
<div><span @click="addData()">添加</span></div>
	<table>
		<tr>
			<td>班级ID</td>
			<td>班级名称</td>
			<td>班级人数</td>
			<td>班级空余时间</td>
			<!--td>开设课程代号</td-->
			<td>开设课程名称</td>
			<td>操作</td>
		</tr>
		<tr v-for="academy in academys">
		    <td>{{academy.classId}}</td>
			<td>{{academy.className}}</td>
			<td>{{academy.classSize}}</td>
			<td>{{academy.spareTime}}</td>
			<!--td>{{academy.courseId}}</td-->
			<td>{{academy.courseName}}</td>
			<td><span @click="changeData(academy.id)">修改</span><span @click="deleteData(academy.id)">删除</span></td>
		</tr>
	</table>

</template>

<script>

module.exports = {
	data: function () {
		return {
			academys: null
		}
	},
	ready: function () {
		this.getAcademys()
	},
	methods: {
		getAcademys: function () {
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Academy/find",
				dataType:"jsonp",
				success:function(json){
					if (json || json.academys.length > 0){
						self.academys =  JSON.parse(json.academys);
					}				
				}
			});
		},
		addData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Academy/add",
				dataType:"jsonp",
				success:function(json){
					if (json || json.academys.length > 0){
						self.academys =  JSON.parse(json.academys);
					}				
				}
			});
		},
		deleteData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Academy/delete",
				dataType:"jsonp",
				success:function(json){
					if (json || json.academys.length > 0){
						self.academys =  JSON.parse(json.academys);
					}				
				}
			});
		},
		changeData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Academy/change",
				dataType:"jsonp",
				success:function(json){
					if (json || json.academys.length > 0){
						self.academys =  JSON.parse(json.academys);
					}				
				}
			});

		}

	}

}
</script>
