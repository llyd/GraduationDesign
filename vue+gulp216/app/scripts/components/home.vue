<template>
<div id="app">
	<header>
		<img src="_tmp/images/logo.jpg" alt="logo" class="logo"/>
		<span class="topic">ECNU软件学院教务排课系统</span>
		<span class="zhuxiao">注销</span>
	</header>

	<section class="main_left">
		<ul>
			<li>数据管理</li>
				<ul class="sub_menu">
					<li v-link="{ path: '/dataManage/dataAcademy' }">院系数据维护</li>
					<li v-link="{ path: '/dataManage/dataTeacher' }">教师数据维护</li>
					<li v-link="{ path: '/dataManage/dataRoom' }">教室数据维护</li>
					<li v-link="{ path: '/dataManage/dataCourse' }">课程数据维护</li>
				</ul>
			<li v-link="{ path: '/courseArrange' }">排课处理</li>
			<li>课表查询</li>
				<ul class="sub_menu">
					<li v-link="{ path: '/courseQuery/queryByClass' }">按班级查询</li>
					<li v-link="{ path: '/courseQuery/queryByRoom' }">按教室查询</li>
					<li v-link="{ path: '/courseQuery/queryByTeacher' }">按教师查询</li>
				
				</ul>
			<li v-link="{ path: '/siteadminManage' }">后台管理</li>
		</ul>

	</section>
	<section class="main_right">
		<router-view></router-view>
	</section>
	<footer>
		
	</footer>

</div>
</template>

<script>
	module.exports={
		data: function () {
			return {

			}
		},
		methods: {
			
		}

	}

</script>

<style lang="stylus">
	body
		font:normal 11px auto "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif; 
		color:#4f6b72
		background:#E6EAE9
		
	#app
		marigin:0
		padding:0 50px
	
	header
		margin:0
		height:50px
		border-bottom:#DDD 1px solid

	.logo
		width:30px
		height:30px
		position:absolute
		top:10px
		left:100px

	.topic
		position:absolute
		top:15.5px
		left:140px
	
	.zhuxiao
		position:absolute
		top:15.5px
		right:150px

	.main_left
		float:left
		width:10%
		padding:10px
		ul
			li
				margin:5px

	.sub_menu
		margin:10px 20px

	.main_right
		float:right
		width:85%
		height:960px
		border-left:#DDD 1px solid
		padding:10px
		
</style>