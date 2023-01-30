import {App} from "vue"
import router from "../router"

export const useRouter = (app:App) => {
	app.use(router)
}