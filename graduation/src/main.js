import Vue from 'vue'
import Router from 'vue-router'
// import { domain, fromNow} from './filters'
import App from './components/App.vue'
import CourseArrange from './components/courseArrange.vue'

//install router
vue.use(Router);

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

//routing
var router = new Router()

router.map({
	'/news/:page': {
		component: NewsView
	},
	'/user/:id': {
		component: userView
	},
	'/item/:id': {
		component: ItemView
	}
})

router.beforeEach(function () {
	window.scrollTo(0,0)
})

router.redirect({
	'*': '/news/1'
})

router.start(CourseArrange,'#CourseArrange')

