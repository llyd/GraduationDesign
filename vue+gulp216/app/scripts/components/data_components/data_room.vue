<template>
<span @click="addData()">添加</span>
	<table>
		<tr>
			<td>教室名称</td>
			<td>座位数</td>
			<td>教室类型</td>
			<td>可用时间段</td>
			<td>操作</td>
		</tr>
		<tr v-for="room in rooms">
			<td>{{room.roomId}}</td>
			<td>{{room.roomName}}</td>
			<td>{{room.roomSize}}</td>
			<td>{{room.roomType}}</td>
			<td>{{room.emptyTime}}</td>
			<td><span @click="changeData(room.id)">修改</span><span @click="deleteData(room.id)">删除</span></td>
		</tr>
	</table>

</template>

<script>

module.exports = {
	

	data: function () {
		return {
			rooms: null
		}
	},
	ready: function () {
		this.getRoom()
	},
	// computed: {
	// 	// rooms: function () {
					
		
	// 	// }
	// },
	methods: {		
		getRoom: function () {	
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Room/find",
				dataType:"jsonp",
				success:function(json){
					if (json || json.rooms.length > 0){
						self.rooms =  JSON.parse(json.rooms);
					}				
				}
			});
		},
		addData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Room/add",
				dataType:"jsonp",
				success:function(json){
					if (json || json.rooms.length > 0){
						self.rooms =  JSON.parse(json.rooms);
					}	
				}
			});

		},
		deleteData: function () {

			$.ajax({
				type:"get",
				url:"http://localhost:1337/Room/delete",
				dataType:"jsonp",
				success:function(json){
					if (json || json.rooms.length > 0){
						self.rooms =  JSON.parse(json.rooms);
					}	
				}
			});

		},
		changeData: function () {
			$.ajax({
				type:"get",
				url:"http://localhost:1337/Room/change",
				dataType:"jsonp",
				success:function(json){
					if (json || json.rooms.length > 0){
						self.rooms =  JSON.parse(json.rooms);
					}	
				}
			});

		}

	}

}
</script>
