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
			<!--td>{{academy.courseIds}}</td-->
			<td>{{academy.courseNames}}</td>
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
		this.getData()
	},

	methods: {
		getData: function () {
			var self = this;
			$.ajax({
				url:"/Academy/getData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.academys =  JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			var self = this;
			$.ajax({
				url:"/Academy/addData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.academys =  JSON.parse(data);
					}				
				}
			});
		},
		deleteData: function () {
			var self = this;
			$.ajax({
				url:"/Academy/deleteData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.academys =  JSON.parse(data);
					}				
				}
			});
		},
		changeData: function () {
			var self = this;
			$.ajax({
				url:"/Academy/changeData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.academys =  JSON.parse(data);
					}				
				}
			});

		}

	}

}
</script>
