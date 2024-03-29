<template lang="pug">
  div
    v-form
      v-container(
        fluid
      ).d-flex.flex-column.justify-center.align-center
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            label="Email"
            v-model="loginData.email"
            density="comfortable"
            :rules="emailRules"
            :counter="10"
            :error-messages="emailErrors"
            required
            type="Email"
            variant="outlined"
          )
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            density="comfortable"
            label="Password"
            :rules="passwordRules"
            required
            type="password"
            variant="outlined"
          )
        v-col(cols="12" md="4").py-0
          router-link(to="#").text-black Quên mật khẩu?
        v-col(cols="12" md="4").pt-0
          v-btn.mt-2(
            type="submit"
            block
            @click="validateEmail"
            variant="outlined"
          ) Đăng nhập

</template>
<script lang="js">
import {defineComponent, reactive, ref} from "vue";
import {showNotification} from "@/common";

const LoginPage = defineComponent({
  setup(){
    const loginData = ref({
      email: '',
      password: ''
    })

    const emailRules = ref([
      value => {
        if (value) return true
        return 'Vui lòng nhập đầy đủ email!'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true
        return 'Email chưa đúng định dạng!'
      },
    ])
    const passwordRules = ref([
      value => {
        if (value) return true
        return 'Vui lòng nhập đầy đủ mật khẩu!'
      }
    ])
    const emailErrors = ref([])
    const passwordErrors = ref([])
    const validateEmail = () => {
      emailErrors.value = []; // Clear previous errors
      emailRules.value.forEach((rule) => {
        const error = rule(loginData.value.email);
        if (error) {
          emailErrors.value.push(error);
        }
      })
      passwordErrors.value = []
      passwordRules.value.forEach((rule) => {
        const error = rule(loginData.value.password);
        if (error) {
          passwordErrors.value.push(error);
        }
      })
      emailErrors.value.map((item, index) => {
        if(item !== true){
          showNotification.warning(item)
        }
      })
      passwordErrors.value.map((item, index) => {
        if(item !== true){
          showNotification.warning(item)
        }
      })
    }
    return {
      emailRules,
      emailErrors,
      validateEmail,
      loginData,
      passwordRules,
      passwordErrors
    }
  }
})
export default LoginPage
</script>
<style scoped lang="sass">

</style>
