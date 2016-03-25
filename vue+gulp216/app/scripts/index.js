// import './utils/service'
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/home'
import courseArrange from './components/arrange_components/courseArrange'
import siteadminManage from './components/manage_components/siteadminManage'
import dataAcademy from './components/data_components/data_academy'
import dataCourse from './components/data_components/data_course'
import dataRoom from './components/data_components/data_room'
import dataTeacher from './components/data_components/data_teacher'
import queryByClass from './components/query_components/queryByClass'
import queryByRoom from './components/query_components/queryByRoom'
import queryByTeacher from './components/query_components/queryByTeacher'

//install router
Vue.use(VueRouter);

//routing
var router = new VueRouter();
   
router.map({
	'/dataManage/dataAcademy': {
		component: dataAcademy
	},
	'/dataManage/dataCourse': {
		component: dataCourse
	},
	'/dataManage/dataRoom': {
		component: dataRoom
	},
	'/dataManage/dataTeacher': {
		component: dataTeacher
	},
	'/courseArrange': {
		component: courseArrange
	},
	'/courseQuery/queryByClass': {
		component: queryByClass
	},
	'/courseQuery/queryByRoom': {
		component: queryByRoom
	},
	'/courseQuery/queryByTeacher': {
		component: queryByTeacher
	},
	'/siteadminManage': {
		component: siteadminManage
	}
})

router.start(home,'#app')
