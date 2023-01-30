import { createApp } from 'vue'
import { usePinia } from './plugins/usePinia'
import { useRouter } from './plugins/useRouter'
import App from './App.vue'
import './style.css'

function setupApp(){
	const app = createApp(App)
	useRouter(app)
	usePinia(app)
	app.mount('#app')
}

setupApp()