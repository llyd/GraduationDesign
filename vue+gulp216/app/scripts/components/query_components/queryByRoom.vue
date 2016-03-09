<template>
<span>选择教室</span>
	<select>
		<option v-for="room in rooms">{{room.roomName}}</option>
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
			rooms: function () {
				$.post("localhost:1337/courseQuery/room","",function(returnData){
					return returnData;
				})

			},	
			courseSche: function () {
				$.post("localhost:1337/courseQuery/courseSche","",function(returnData){
					return returnData;
				})
			}
		}
	}
</script>
<style lang="stylus">
	table
		border:1
</style>