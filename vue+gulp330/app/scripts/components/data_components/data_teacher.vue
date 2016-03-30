<template>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
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
			<td v-bind:style="tdShow">{{teacher.teacherId}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.teacherId}}"></td>
			<td v-bind:style="tdShow">{{teacher.teacherName}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.teacherName}}"></td>
			<td v-bind:style="tdShow">{{teacher.teacherSex}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.teacherSex}}"></td>
			<td v-bind:style="tdShow">{{teacher.teacherTitle}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.teacherTitle}}"></td>
			<td v-bind:style="tdShow">{{teacher.workload}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.workload}}"></td>
			<td v-bind:style="tdShow">{{teacher.haveWorked}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.haveWorked}}"></td>
			<td v-bind:style="tdShow">{{teacher.idleTime}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{teacher.idleTime}}"></td>
			<td v-bind:style="tdShow">
				<button type="button" @click="editData(teacher.id)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(teacher.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
			</td>
			<td v-bind:style="inputHidden">
					<button type="button" @click="changeData(teacher.id)" class="btn btn-success btn-xs" aria-label="change">确定</button>
					<button type="button" @click="cancel()" class="btn btn-danger btn-xs" aria-label="cancel">取消</button>
			</td>
		</tr>
	</table>

	<div class="tanceng" v-bind:style="tancengStyle">
		<div>教工号<input type="text" v-model="teacherId"/></div>
		<div>教师姓名<input type="text" v-model="teacherName"/></div>
		<div>教师性别
			<input type="radio" value="男" id="man" v-model="teacherSex"><label for="man">男</label>
			<input type="radio" value="女" id="woman" v-model="teacherSex"><label for="woman">女</label>
		</div>
		<div>职称
			<input type="radio" value="0" id="js" v-model="teacherTitle"><label for="js">讲师</label>
			<input type="radio" value="1" id="fjs" v-model="teacherTitle"><label for="fjs">副教授</label>
			<input type="radio" value="2" id="jiaoshou" v-model="teacherTitle"><label for="jiaoshou">教授</label>
		</div>
		<div>预定工作量<input type="text" v-model="workload"/></div>
		<div>已用工作量<input type="text" v-model="haveWorked"/></div>

		<input class="hidden" type="text" v-model="idleTime"/>

		<div style="float:left;width:160px">空闲时间段</div>
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
    				<button class="btn btn-success btn-sm" @click="submitIdleTime">确定</button>
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
			teachers: null,
			teacherId: null,
			teacherName: null,
			teacherSex: null,
			teacherTitle: null,
			workload: null,
			haveWorked: null,
			idleTime: null,
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
		this.getTeachers()
	},
	methods: {
		submitIdleTime: function () {
		    //???this.idleTime
		    
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
		getTeachers: function () {
			var self = this;
			$.ajax({
				url:"/Teacher/getData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						var getTeachers = JSON.parse(data);
						for(var i=0;i<getTeachers.length;i++){
							if(getTeachers[i].teacherTitle ==0){
								getTeachers[i].teacherTitle = "讲师";
							}
							else if(getTeachers[i].teacherTitle == 1){
								getTeachers[i].teacherTitle = "副教授";
							}
							else{
								getTeachers[i].teacherTitle = "教授";
							}
						}
						self.teachers = getTeachers;
					}				
				}
			});

		},
	
		addData: function () {
			var teacherId = this.teacherId;
			var teacherName = this.teacherName;
			var teacherSex = this.teacherSex;
			var teacherTitle = this.teacherTitle;
			var workload = this.workload;
			var haveWorked = this.haveWorked;
			var idleTime = this.idleTime;
			var self = this;
			$.ajax({
				url:"/Teacher/addData",
				method:"get",
				data:{'teacherId':teacherId,'teacherName':teacherName,'teacherSex':teacherSex,'teacherTitle':teacherTitle,'workload':workload,'haveWorked':haveWorked,'idleTime':idleTime},
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
				url:"/Teacher/deleteData",
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
		changeData: function (id) {
			var self = this;
			$.ajax({
				url:"/Teacher/changeData",
				method:"get",
				data:"1",
				success:function(data){
					if (data || data.length > 0){
						self.teachers =  JSON.parse(data);
					}				
				}
			});
		}

	}

}
</script>
<style lang="stylus">

</style>
