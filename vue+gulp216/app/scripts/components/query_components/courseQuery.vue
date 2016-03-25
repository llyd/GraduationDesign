<template>
	<span>选择查询方式：</span>
	<select v-model="selected">
		<option v-bind:value="{num:1}">按班级查询</option>
		<option v-bind:value="{num:2}">按教室查询</option>
		<option v-bind:value="{num:3}">按教师查询</option>
	</select>
	
	<span>按 {{ selected }} 查询 </span>
	<select v-show="vm.selected.num == 1 ? ok : false">
		<option v-for="class in classes">{{class.className}}</option>
	</select>
	
	<select v-show="vm.selected.num == 2 ? ok : false">
		<option v-for="room in rooms">{{room.roomName}}</option>
	</select>
	
	<select v-show="vm.selected.num == 3 ? ok : false">
		<option v-for="teacher in teachers">{{teacher.teacherName}}</option>
	</select>

	<table>
	<tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
	<tr><td>周一</td><td>{{courseSche.a}}</td><td>{{courseSche.b}}</td><td>{{courseSche.c}}</td><td>{{courseSche.d}}</td><td>{{courseSche.e}}</td></tr>
	<tr><td>周二</td><td>{{courseSche.f}}</td><td>{{courseSche.g}}</td><td>{{courseSche.h}}</td><td>{{courseSche.i}}</td><td>{{courseSche.j}}</td></tr>
	<tr><td>周三</td><td>{{courseSche.k}}</td><td>{{courseSche.l}}</td><td>{{courseSche.m}}</td><td>{{courseSche.n}}</td><td>{{courseSche.o}}</td></tr>
	<tr><td>周四</td><td>{{courseSche.p}}</td><td>{{courseSche.q}}</td><td>{{courseSche.r}}</td><td>{{courseSche.s}}</td><td>{{courseSche.t}}</td></tr>
	<tr><td>周五</td><td>{{courseSche.u}}</td><td>{{courseSche.v}}</td><td>{{courseSche.w}}</td><td>{{courseSche.x}}</td><td>{{courseSche.y}}</td></tr>
	</table>

</template>

<script>
	module.exports={
		data: function (){

		},
		computed: {
			classes: function () {
				var self = this;
				$.ajax({
			  	url:"/CourseQuery/class",
					method:"POST",
					data:"1",
	    	  contentType: false,
	    	  processData: false,
	    	  cache: false,
	    	  success:function(json){
						// if (json || json.courses.length > 0){
						// 	self.courses =  JSON.parse(json.courses);
						// }				
					}
				});
			},
			rooms: function () {
				var self = this;
					$.ajax({
				  	url:"/CourseQuery/room",
						method:"POST",
						data:"1",
		    	  contentType: false,
		    	  processData: false,
		    	  cache: false,
		    	  success:function(json){
							// if (json || json.courses.length > 0){
							// 	self.courses =  JSON.parse(json.courses);
							// }				
						}
					});
			},
			teachers: function () {
				var self = this;
				$.ajax({
			  	url:"/CourseQuery/teachers",
					method:"POST",
					data:"1",
	    	  contentType: false,
	    	  processData: false,
	    	  cache: false,
	    	  success:function(json){
						// if (json || json.courses.length > 0){
						// 	self.courses =  JSON.parse(json.courses);
						// }				
					}
				});
			},
			courseSche: function () {
				var self = this;
				$.ajax({
			  	url:"/CourseQuery/courseSche",
					method:"POST",
					data:"1",
	    	  contentType: false,
	    	  processData: false,
	    	  cache: false,
	    	  success:function(json){
						// if (json || json.courses.length > 0){
						// 	self.courses =  JSON.parse(json.courses);
						// }				
					}
				});
			}
		}
	}
</script>