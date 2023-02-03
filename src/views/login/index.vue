<script lang="ts" setup>
import {ref} from "vue"
import {FormInst} from "naive-ui"
import useLogin from "./useLogin"

const formRef = ref<FormInst| null>(null)

const loginFormData = ref({
	userName:'',
	passWord:''
})

const { handleValidateSubmit } = useLogin(formRef)

</script>
<template>
	<div flex h-full justify-center	items-center>
		  <div w-96 shadow-2xl p-5 rounded-md>
				<h1 text-center>Admin</h1>
				<n-form ref="formRef">
					<n-form-item path="userName" label="账号">
						<n-input v-model:value="loginFormData.userName" />
					</n-form-item>
					<n-form-item path="passWord" label="密码">
						<n-input v-model:value="loginFormData.passWord" />
					</n-form-item>
					<n-button block type="primary" @click="handleValidateSubmit">
							Log in
					</n-button>
				</n-form>
			</div>
	</div>  
</template>