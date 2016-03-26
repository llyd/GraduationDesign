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
				url:"/Room/getData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.rooms =  JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			$.ajax({
				url:"/Room/addData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.rooms =  JSON.parse(data);
					}	
				}
			});

		},
		deleteData: function () {

			$.ajax({
				url:"/Room/deleteData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.rooms =  JSON.parse(data);
					}	
				}
			});

		},
		changeData: function () {
			$.ajax({
				url:"/Room/changeData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.rooms =  JSON.parse(data);
					}	
				}
			});

		}

	}

}
</script>
