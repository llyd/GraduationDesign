<template>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>账号</td>
			<td>密码</td>
			<td>操作</td>
		</tr>
		<tr v-for="manager in managers">
			  <td v-bind:style="tdShow">{{manager.name}}</td>
			  <td v-bind:style="inputHidden"><input type="text" value="{{manager.name}}" v-model="change_name"></td>
			  <td v-bind:style="tdShow">{{manager.password}}</td>
			  <td v-bind:style="inputHidden"><input type="text" value="{{manager.password}}" v-model="change_password"></td>
				<td v-bind:style="tdShow">
					<button type="button" @click="editData(manager.id)" class="btn btn-success btn-xs" aria-label="change">修改</button>
					<button type="button" @click="deleteData(manager.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
				</td>
				<td v-bind:style="inputHidden">
					<button type="button" @click="changeData(manager.id)" class="btn btn-success btn-xs" aria-label="change">确定</button>
					<button type="button" @click="cancel()" class="btn btn-danger btn-xs" aria-label="cancel">取消</button>
			</td>
		</tr>
	</table>

	<div class="manage_tanceng" v-bind:style="tancengStyle">
		<div>账号<input type="text" v-model="name"/></div>
		<div>密码<input type="text" v-model="password"/></div>
    <div style="text-align:center">
   		<button class="btn btn-primary dropdown-toggle" style="margin-right:30px" type="button" @click="addData">提交</button>
   		<button class="btn btn-danger dropdown-toggle" style="margin-left:30px" type="button" @click="closeTanceng">取消</button>
   </div>
	</div>
</div>
</template>
<script>
module.exports = {
	data: function (){
		return {
			managers:null,
			name:null,
			password:null,
			change_name:null,
			change_password:null,
			tdShow:null,
			tancengStyle:{display:'none'},
			inputHidden:{display:'none'}
		}
	},
	ready: function () {
		this.getManagers();
	},
	methods:{
		showTanceng:function () {
			this.tancengStyle.display = 'block';
		},
		closeTanceng:function () {
			this.tancengStyle.display = 'none';
		},	
		editData: function (id) {
			this.inputHidden = null;
			this.tdShow = {display:'none'};
		},
		cancel:function () {
			this.tdShow = null;
			this.inputHidden = {display:'none'};
		},
		getManagers: function (){
			var self = this;
			$.ajax({
				url:"/Siteadmin/getManagers",
				method:"POST",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.managers =  JSON.parse(data);
					}				
				}
			});
		},
		deleteData: function (id) {
			var self = this;
			$.ajax({
				url:"/Siteadmin/deleteData",
				method:"get",
				data:{'id':id},
				success:function(data){
					if (data || data.length > 0){
						alert("删除成功");
						self.getManagers();
					}				
				}
			});
		},
		changeData: function (id) {
			console.log("change_name",this.change_name);
			console.log("change_name",this.change_password);
			var self = this;
			$.ajax({
				url:"/Siteadmin/changeData",
				method:"get",
				data:{'id':id,'name':this.change_name,'password':this.change_password},
				success:function(data){
					if (data || data.length > 0){
						alert("修改成功");
						self.tdShow = null;
						self.inputHidden = {display:'none'};
						self.getManagers();
					}				
				}
			});
		},
		addData: function () {
			var self = this;
			$.ajax({
				url:"/Siteadmin/addData",
				method:"get",
				data:{'name':this.name,'password':this.password},
				success:function(data){
					if (data || data.length > 0){
						alert("提交成功");
						self.tancengStyle.display = 'none';
						self.getManagers();
					}				
				}
			});
		}
	}
}
</script>
<style lang="stylus">
.manage_tanceng
	background #fff
	width:280px
	padding:20px
	position:absolute
	left:40%
	top:30%
	font-size:20px
	div
		width:100%
		margin:0 auto
		height:40px
		line-height:30px
		input,label
			margin-left:10px
			font-size:15px
</style>