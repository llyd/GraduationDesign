<template>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>教室id</td>
			<td>教室名称</td>
			<td>座位数</td>
			<td>教室类型</td>
			<td>可用时间段</td>
			<td>操作</td>
		</tr>
		<tr v-for="room in rooms">
			<td v-bind:style="tdShow">{{room.roomId}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{room.roomId}}"></td>
			<td v-bind:style="tdShow">{{room.roomName}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{room.roomName}}"></td>
			<td v-bind:style="tdShow">{{room.roomSize}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{room.roomSize}}"></td>
			<td v-bind:style="tdShow">{{room.roomType}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{room.roomType}}"></td>
			<td v-bind:style="tdShow">{{room.emptyTime}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{room.emptyTime}}"></td>
			<td v-bind:style="tdShow">
				<button type="button" @click="editData(room.id)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(room.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
			</td>
			<td v-bind:style="inputHidden">
					<button type="button" @click="changeData(room.id)" class="btn btn-success btn-xs" aria-label="change">确定</button>
					<button type="button" @click="cancel()" class="btn btn-danger btn-xs" aria-label="cancel">取消</button>
			</td>
		</tr>
	</table>

<div class="tanceng" v-bind:style="tancengStyle">
		<div>教室id<input type="text" v-model="roomId"/></div>
		<div>教室名称<input type="text" v-model="roomName"/></div>
		<div>座位数<input type="text" v-model="roomSize"/></div>
		<div>教室类型
			<input type="radio" value="1" id="ptjs" v-model="roomType"><label for="ptjs">普通教室</label>
			<input type="radio" value="2" id="jf" v-model="roomType"><label for="jf">机房</label>
			<input type="radio" value="3" id="tljs" v-model="roomType"><label for="tljs">听力教室</label>
			<input type="radio" value="4" id="sys" v-model="roomType"><label for="sys">实验室</label>
		</div>
		<input class="hidden" type="text" v-model="emptyTime"/>

		<div style="float:left;width:160px">可用时间段</div>
		<div class="dropdown">
 			<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" @click="showDropdown">
    			{{chooseTime}}
    			<span class="caret"></span>
  			</button>
 			<ul class="dropdown-menu" v-bind:style="menuStyle" aria-labelledby="dropdownMenu1">
    			<li v-for="day in days">{{day.msg}}
    				<button v-for="num in nums" type="button" class="btn btn-sm" v-bind:style="btnStyle" @click="changeColor">{{num.msg}}</button>
    			</li>
    			<li class="center">
    				<button class="btn btn-success btn-sm" @click="submitEmptyTime">确定</button>
    				<button class="btn btn-success btn-sm" @click="closeDropdown">取消</button>
    			</li>
  			</ul>
  		</div>
		
   	<div style="text-align:center">
   		<button class="btn btn-primary dropdown-toggle" style="margin-right:30px" type="button" @click="addData">提交</button>
   		<button class="btn btn-danger dropdown-toggle" style="margin-left:30px" type="button" @click="closeTanceng">取消</button>
   </div>
	</div>

</div>
</template>

<script>

module.exports = {
	

	data: function () {
		return {
			rooms: null,
			roomId: null,
			roomName: null,
			roomSize: null,
			roomType: null,
			emptyTime:null,
			tdShow:null,
			chooseTime:"请选择",
			days:[{msg:'周一'},{msg:'周二'},{msg:'周三'},{msg:'周四'},{msg:'周五'}],
			nums:[{msg:'1'},{msg:'2'},{msg:'3'},{msg:'4'},{msg:'5'}],
			menuStyle:{display:'none'},
			tancengStyle:{display:'none'},
			inputHidden:{display:'none'},
			btnStyle:{color:'#000',borderColor:'#ccc',backgroundColor:'#fff'}
		}
	},
	ready: function () {
		this.getRoom()
	},
	methods: {	
		submitEmptyTime: function () {
		    //???this.emptyTime
		    
			this.menuStyle.display = "none";
			this.chooseTime = "点击查看";
		},
		showTanceng:function () {
			this.tancengStyle.display = 'block';
		},
		closeTanceng:function () {
			this.tancengStyle.display = 'none';
		},	
		showDropdown: function () {
			if(this.menuStyle.display == 'none'){
				this.menuStyle.display = 'block';
			}
			else{
				this.menuStyle.display = 'none';
			}
		},
		closeDropdown: function () {
			this.menuStyle.display = "none";
		},
		changeColor: function () {
			if(event.target.style.backgroundColor == "rgb(255, 255, 255)"){
				event.target.style="color:#fff;background-color:#5bc0de;border-color:#46b8da";
			}
			else{
				event.target.style="color:#000;background-color:#fff;border-color:#ccc";
			}
		},
		editData: function () {
			this.inputHidden = null;
			this.tdShow = {display:'none'};
		},
		cancel:function () {
			this.tdShow = null;
			this.inputHidden = {display:'none'};
		},
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
						var getRoom = JSON.parse(data);
						for(var i=0;i<getRoom.length;i++){
							if(getRoom[i].roomType == 1){
								getRoom[i].roomType = "普通教室";
							}
							else if(getRoom[i].roomType == 2){
								getRoom[i].roomType = "机房";
							}
							else if(getRoom[i].roomType == 3){
								getRoom[i].roomType = "听力教室";
							}
							else{
								getRoom[i].roomType = "实验室";
							}
						}
						self.rooms = getRoom;
					}				
				}
			});
		},
		addData: function () {
			var roomId = this.roomId;
			var roomName = this.roomName;
			var roomSize = this.roomSize;
			var roomType = this.roomType;
			var emptyTime = this.emptyTime;
			var self = this;
			$.ajax({
				url:"/Room/addData",
				method:"get",
				data:{'roomId':roomId,'roomName':roomName,'roomSize':roomSize,'roomType':roomType,'emptyTime':emptyTime},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.tancengStyle.display = 'none';
						self.getData();
					}	
				}
			});

		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/Room/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getData();
					}	
				}
			});

		},
		changeData: function () {
			$.ajax({
				url:"/Room/changeData",
				method:"get",
				data:"1",
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
<style lang="stylus">
</style>