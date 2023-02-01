import type { FormInst } from "naive-ui"
import type { Ref } from "vue"

function useLogin(ref:Ref<FormInst | null>){

	function handleValidateSubmit(event:MouseEvent){
		ref.value?.validate((errors) => {
			if(!errors){
				console.log("验证成功")
			}else{
				console.log("验证失败")
			}
		})
	}
	
	return {
		handleValidateSubmit
	}
}

export default useLogin