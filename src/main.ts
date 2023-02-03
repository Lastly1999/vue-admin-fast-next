import { createApp } from 'vue'
import { usePinia } from './plugins/usePinia'
import { useRouter } from './plugins/useRouter'
import App from './App.vue'
import 'uno.css'
import './style.scss'

function setupApp(){
	const app = createApp(App)
	useRouter(app)
	usePinia(app)
	app.mount('#app')
}

setupApp()