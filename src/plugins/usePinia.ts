import { createPinia } from "pinia"
import {App} from "vue"

export const usePinia = (app:App) => {
	app.use(createPinia())
}