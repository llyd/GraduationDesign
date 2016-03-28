<template>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>班级ID</td>
			<td>班级名称</td>
			<td>班级人数</td>
			<td>班级空余时间</td>
			<td>开设课程名称</td>
			<td>操作</td>
		</tr>
		<tr v-for="academy in academys">
			  <td v-bind:style="tdShow">{{academy.classId}}</td>
			  <td v-bind:style="inputHidden"><input type="text" value="{{academy.classId}}"></td>
				<td v-bind:style="tdShow">{{academy.className}}</td>
				<td v-bind:style="inputHidden"><input type="text" value="{{academy.className}}"></td>
				<td v-bind:style="tdShow">{{academy.classSize}}</td>
				<td v-bind:style="inputHidden"><input type="text" value="{{academy.classSize}}"></td>
				<td v-bind:style="tdShow">{{academy.spareTime}}</td>
				<td v-bind:style="inputHidden"><input type="text" value="{{academy.spareTime}}"></td>
				<td v-bind:style="tdShow">{{academy.courseNames}}</td>
				<td v-bind:style="inputHidden"><input type="text" value="{{academy.courseNames}}"></td>
				<td v-bind:style="tdShow"><button type="button" @click="editData(academy.id)" class="btn btn-default btn-xs" aria-label="change">修改</button>
						<button type="button" @click="deleteData(academy.id)" class="btn btn-default btn-xs" aria-label="delete">删除</button>
				</td>
				<td v-bind:style="inputHidden"><button type="button" @click="changeData(academy.id)" class="btn btn-default btn-xs" aria-label="change">确定</button>
						<button type="button" @click="cancel()" class="btn btn-default btn-xs" aria-label="cancel">取消</button>
			</td>
		</tr>
	</table>

	<div class="tanceng" v-bind:style="tancengStyle">
		<div>班级ID<input type="text" v-model="classId"/></div>
		<div>班级名称<input type="text" v-model="className"/></div>
		<div>班级人数<input type="text" v-model="classSize"/></div>
		<input class="hidden" type="text" v-model="spareTime"/>
		<input class="hidden" type="text" v-model="courseName"/>

		<div style="float:left;width:160px">班级空余时间</div>
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
    			<button class="btn btn-success btn-sm" @click="submitSpareTime">确定</button>
    			<button class="btn btn-success btn-sm" @click="closeSpareTime">取消</button></li>
  		</ul>
  	</div>
		<div style="float:left;width:160px">开设课程名称</div>
		<div class="dropdown">
 			<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" @click="showCourseDropdown">
    	{{chooseCourse}}
    	<span class="caret"></span>
  		</button>
 			<ul class="dropdown-menu" v-bind:style="courseMenuStyle" aria-labelledby="dropdownMenu2">
    		<li v-for="course in courses"><a @click="changeCourseColor">{{course.courseName}}</a></li>
    		<li class="center">
    			<button class="btn btn-success btn-sm" @click="submitCourseName">确定</button>
    			<button class="btn btn-success btn-sm" @click="closeCourse">取消</button></li>
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
			classId:null,
			className:null,
			classSize:null,
			spareTime:null,
			courseName:null,
			academys: null,
			courses:null,
			tdShow:null,
			chooseTime:"请选择",
			chooseCourse:"请选择",
			days:[{msg:'周一'},{msg:'周二'},{msg:'周三'},{msg:'周四'},{msg:'周五'}],
			nums:[{msg:'1'},{msg:'2'},{msg:'3'},{msg:'4'},{msg:'5'}],
			menuStyle:{display:'none'},
			courseMenuStyle:{display:'none'},
			tancengStyle:{display:'none'},
			inputHidden:{display:'none'},
			btnStyle:{color:'#000',borderColor:'#ccc',backgroundColor:'#fff'}
		}
	},
	ready: function () {
		this.getData()			
	},
	methods: {
		submitSpareTime: function () {

			this.menuStyle.display = "none";
			this.chooseTime = "点击查看";
		},
		submitCourseName: function () {


			this.courseMenuStyle.display = "none";
			this.chooseCourse = "点击查看";
		},
		closeSpareTime: function () {
			this.menuStyle.display = "none";
		},
		closeCourse: function () {
			this.courseMenuStyle.display = "none";
		},
		showTanceng: function () {
			this.getCourses();
			this.tancengStyle.display = "block";
		},
		closeTanceng: function () {
			this.tancengStyle.display = "none";
		},
		changeColor: function () {
			console.log(event.target.style.backgroundColor);
			if(event.target.style.backgroundColor == "rgb(255, 255, 255)"){
				event.target.style="color:#fff;background-color:#5bc0de;border-color:#46b8da";
			}
			else{
				event.target.style="color:#000;background-color:#fff;border-color:#ccc";
			}
		},
		changeCourseColor: function () {
			console.log(event.target.style.backgroundColor);
			if(event.target.style.backgroundColor == "rgb(255, 255, 255)"){
				event.target.style="color:#fff;background-color:#f0ad4e;border-color:#eea236";
			}
			else{
				event.target.style="color:#000;background-color:#fff;border-color:#ccc";
			}
		},
		showDropdown:function () {
			if(this.menuStyle.display == 'none'){
				this.menuStyle.display = 'block';
			}
			else{
				this.menuStyle.display = 'none';
			}
		},
		showCourseDropdown: function () {
			if(this.courseMenuStyle.display == 'none'){
				this.courseMenuStyle.display = 'block';
			}
			else{
				this.courseMenuStyle.display = 'none';
			}
		},
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
		getCourses: function () {
			var self = this;
			$.ajax({
				url:"/Course/getData",
				method:"POST",
				data:"1",
	      contentType: false,
	      processData: false,
	      cache: false,
				success:function(data){
					if (data || data.length > 0){
						self.courses =  JSON.parse(data);
					}				
				}
			});
		},
		addData: function () {
			var classId = this.classId;
			var className = this.className;
			var classSize = this.classSize;
			var spareTime = this.spareTime;
			var courseName = this.courseName;
			var self = this;
			$.ajax({
				url:"/Academy/addData",
				method:"POST",
				data:{classId:classId,className:className,classSize:classSize,spareTime:spareTime,courseName:courseName},
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
		editData: function () {
			this.inputHidden = null;
			this.tdShow = {display:'none'};
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
		cancel:function () {
			this.tdShow = null;
			this.inputHidden = {display:'none'};
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

<style lang="stylus">
	.main
		margin-top:20px

	.tanceng
		background #fff
		width:450px
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
			input
				margin-left:10px

	.dropdown-menu button
		margin:2px

	.center
		text-align center
</style>
