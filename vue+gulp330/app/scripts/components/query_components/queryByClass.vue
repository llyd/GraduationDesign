<template>
<span class="span_choose">选择班级</span>
<div class="wrip_select">
	<select class="form-control">
		<option v-for="class in classes">{{class.className}}</option>
	</select>
</div>
<div class="main_query">
	<table class="table table-striped table-bordered table-hover table-condensed">
	<tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
	<tr><td>周一</td><td>{{courseSche.a}}</td><td>{{courseSche.b}}</td><td>{{courseSche.c}}</td><td>{{courseSche.d}}</td><td>{{courseSche.e}}</td></tr>
	<tr><td>周二</td><td>{{courseSche.f}}</td><td>{{courseSche.g}}</td><td>{{courseSche.h}}</td><td>{{courseSche.i}}</td><td>{{courseSche.j}}</td></tr>
	<tr><td>周三</td><td>{{courseSche.k}}</td><td>{{courseSche.l}}</td><td>{{courseSche.m}}</td><td>{{courseSche.n}}</td><td>{{courseSche.o}}</td></tr>
	<tr><td>周四</td><td>{{courseSche.p}}</td><td>{{courseSche.q}}</td><td>{{courseSche.r}}</td><td>{{courseSche.s}}</td><td>{{courseSche.t}}</td></tr>
	<tr><td>周五</td><td>{{courseSche.u}}</td><td>{{courseSche.v}}</td><td>{{courseSche.w}}</td><td>{{courseSche.x}}</td><td>{{courseSche.y}}</td></tr>
	</table>
</div>
</template>

<script>
	module.exports={
		data: function (){
			return {
				classes:null,
				courseSche:null
			}
		},
		ready: function () {
			this.getClasses();			
		},
		methods: {
			getClasses: function () {
				var self = this;
				$.ajax({
					url:"/Academy/getData",
					method:"POST",
		      contentType: false,
		      processData: false,
		      cache: false,
					success:function(data){
						if (data || data.length > 0){
							self.classes = JSON.parse(data);
						}				
					}
			});
			},
			courseSche: function () {
				var self = this;
				$.ajax({
					url:"/courseQuery/courseSche",
					method:"get",
					success:function(data){
						if (data || data.length > 0){
							self.courseSche = JSON.parse(data);
						}				
					}
				});
			}
		}
	}
</script>
<style lang="stylus">
.main_query
	margin-top:40px

.span_choose
	font-size:20px
	float:left

.wrip_select
	float:left
	margin-left:20px
	width:200px

</style>