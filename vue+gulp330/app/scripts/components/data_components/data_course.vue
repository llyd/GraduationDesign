<template>
<button class="btn btn-primary" @click="showTanceng()">添加</button>
<button class="btn btn-primary">从excel导入</button>
<div class="main">
	<table class="table table-striped table-bordered table-hover table-condensed">
		<tr>
			<td>课程id</td>
			<td>课程名称</td>
			<td>课程类型</td>
			<td>学分</td>
			<td>可用教室类型</td>
			<td>是否合班上课</td>
			<td>操作</td>
		</tr>
		<tr v-for="course in courses">
			<td v-bind:style="tdShow">{{course.courseId}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{course.courseId}}"></td>
			<td v-bind:style="tdShow">{{course.courseName}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{course.courseName}}"></td>
			<td v-bind:style="tdShow">{{course.courseType}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{course.courseType}}"></td>
			<td v-bind:style="tdShow">{{course.schedule}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{course.schedule}}"></td>
			<td v-bind:style="tdShow">{{course.roomTypes}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{course.roomTypes}}"></td>
			<td v-bind:style="tdShow">{{course.isOrNotHeban}}</td>
			<td v-bind:style="inputHidden"><input type="text" value="{{course.isOrNotHeban}}"></td>
			<td v-bind:style="tdShow">
				<button type="button" @click="editData(course.id)" class="btn btn-success btn-xs" aria-label="change">修改</button>
				<button type="button" @click="deleteData(course.id)" class="btn btn-danger btn-xs" aria-label="delete">删除</button>
			</td>
			<td v-bind:style="inputHidden">
					<button type="button" @click="changeData(course.id)" class="btn btn-success btn-xs" aria-label="change">确定</button>
					<button type="button" @click="cancel()" class="btn btn-danger btn-xs" aria-label="cancel">取消</button>
			</td>
		</tr>
	</table>

	<div class="tanceng" v-bind:style="tancengStyle">
		<div>课程id<input type="text" v-model="courseId"/></div>
		<div>课程名称<input type="text" v-model="courseName"/></div>
		<div>课程类型
			<input type="radio" value="1" id="zybx" v-model="courseType"><label for="zybx">专业必修</label>
			<input type="radio" value="2" id="zyxx" v-model="courseType"><label for="zyxx">专业选修</label>
			<input type="radio" value="3" id="syk" v-model="courseType"><label for="syk">实验课</label>
		</div>
		<div>学分<input type="text" v-model="schedule"/></div>

		<div>可用教室类型
			<input type="checkbox" id="ptjs" value="1" v-model="roomTypes">
			<label for="ptjs">普通教室</label>
			<input type="checkbox" id="jf" value="2" v-model="roomTypes">
			<label for="jf">机房</label>
			<input type="checkbox" id="tljs" value="3" v-model="roomTypes">
			<label for="tljs">听力教室</label>
			<input type="checkbox" id="sys" value="4" v-model="roomTypes">
			<label for="sys">实验室</label>
		</div>

    <input class="hidden" type="text" v-model="teacherNames"/>
		<div>可授课教师
			<div class="dropdown">
 			<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" @click="showDropdown">
    	{{qingxuanze}}
    	<span class="caret"></span>
  		</button>
 			<ul class="dropdown-menu" v-bind:style="teacherMenuStyle" aria-labelledby="dropdownMenu2">
    		<li v-for="teacher in teachers"><a @click="changeTeacherColor">{{teacher.teacherName}}</a></li>
    		<li class="center">
    			<button class="btn btn-success btn-sm" @click="submitTeacherName">确定</button>
    			<button class="btn btn-success btn-sm" @click="close">取消</button></li>
  		</ul>
   </div>

		<div>是否合班上课
			<input type="radio" value="0" id="yes" v-model="isOrNotHeban"><label for="yes">是</label>
			<input type="radio" value="1" id="no" v-model="isOrNotHeban"><label for="no">否</label>
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
			courses: null,
			courseId:null,
			courseName:null,
			courseType:null,
			schedule:null,
			roomTypes:[],
			teacherNames:[],
			isOrNotHeban:null,
			tdShow:null,
			qingxuanze:"请选择",
			inputHidden:{display:'none'},
			tancengStyle:{display:'none',width:'500px'},
			teacherMenuStyle:{display:'none'}
		}
	},
	ready: function () {
		this.getCourses()
	},
	methods: {
		submitTeacherName:function(){
			//???teacherNames

			this.teacherMenuStyle.display = "none";
			this.qingxuanze = "点击查看";
		},
		showDropdown:function(){
			if(this.teacherMenuStyle.display == 'none'){
				this.teacherMenuStyle.display = 'block';
			}
			else{
				this.teacherMenuStyle.display = 'none';
			}
		},
		changeTeacherColor: function () {
			if(event.target.style.backgroundColor == "rgb(255, 255, 255)"){
				event.target.style="color:#fff;background-color:#f0ad4e;border-color:#eea236";
			}
			else{
				event.target.style="color:#000;background-color:#fff;border-color:#ccc";
			}
		},
		close: function () {
			this.teacherMenuStyle.display = "none";
		},
		showTanceng:function () {
			this.tancengStyle.display = 'block';
		},
		closeTanceng:function () {
			this.tancengStyle.display = 'none';
		},
		editData: function () {
			this.inputHidden = null;
			this.tdShow = {display:'none'};
		},
		cancel:function () {
			this.tdShow = null;
			this.inputHidden = {display:'none'};
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
						var getCourses = JSON.parse(data);
						for(var i=0;i<getCourses.length;i++){
							if(getCourses[i].courseType == 1){
								getCourses[i].courseType = "专业必修";
							}
							else if(getCourses[i].courseType == 2){
								getCourses[i].courseType = "专业选修";
							}
							else if(getCourses[i].courseType == 3){
								getCourses[i].courseType = "实验课";
							}
						}
						for(var m=0;m<getCourses.length;m++){
							if(getCourses[m].isOrNotHeban == 0){
								getCourses[m].isOrNotHeban = "是";
							}
							else if(getCourses[m].isOrNotHeban == 1){
								getCourses[m].isOrNotHeban = "否";
							}
						}
						var roomTypes_array;
						for(var n=0;n<getCourses.length;n++){
							roomTypes_array = JSON.parse(getCourses[n].roomTypes);
							for(var j=0;j<roomTypes_array.length;j++){
								if(roomTypes_array[j] == 1){
									roomTypes_array[j] = "普通教室";
								}
								else if(roomTypes_array[j] == 2){
									roomTypes_array[j] = "机房";
								}
								else if(roomTypes_array[j] == 3){
									roomTypes_array[j] = "听力教室";
								}
								else{
									roomTypes_array[j] = "实验室";
								}
								console.log(roomTypes_array[j],"bb");
							}
							getCourses[n].roomTypes = roomTypes_array;
						}
						self.courses = getCourses;
				}
			}
			});
		},
		addData: function () {
			var courseId = this.courseId;
			var courseName = this.courseName;
			var courseType = this.courseType;
			var schedule = this.schedule;
			var roomTypes = this.roomTypes;
			var teacherNames = this.teacherNames;
			var isOrNotHeban = this.isOrNotHeban;
			var self = this;
			$.ajax({
				url:"/Course/addData",
				method:"get",
				data:{'courseId':courseId,'courseName':courseName,'courseType':courseType,'schedule':schedule,'roomTypes':roomTypes,'teacherNames':teacherNames,'isOrNotHeban':isOrNotHeban},
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
			$.ajax({
				url:"/Course/deleteData",
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
			var self = this;
			$.ajax({
				url:"/Course/changeData",
				method:"get",
				data:"1",
				success:function(data){
					if (data || data.length > 0){
						self.courses =  JSON.parse(data);
					}				
				}
			});
		}

	}

}
</script>
<style lang="stylus">
</style>
