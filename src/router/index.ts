import {createRouter,createWebHistory} from "vue-router"

const router = createRouter({
	routes: [
		{
			path:"/",
			redirect:"/login"
		},
		{
			path:"/login",
			component:() => import("@/views/login/index.vue")
		}
	],
	history: createWebHistory()
})

export default router