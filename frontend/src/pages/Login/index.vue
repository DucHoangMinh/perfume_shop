<template lang="pug">
div.loginTabs
  v-container
    v-card
      v-tabs(
        v-model="loginTab"
        bg-color="black"
      ).d-flex
        v-tab(value="login").flex-grow-1 Đăng nhập
        v-tab(value="register").flex-grow-1 Đăng ký
      v-card-text
        v-window(v-model="loginTab")
          v-window-item(value="login")
            login-page
          v-window-item(value="register")
            register-page
</template>
<script lang="js">
import {defineComponent, ref} from "vue";
import LoginPage from "@/pages/Login/Login.vue"
import RegisterPage from "@/pages/Login/Register.vue"

const TotalLoginPage = defineComponent({
  components: {
    LoginPage,
    RegisterPage
  },
  setup(){
    const loginTab = ref(null)
    return {
      loginTab
    }
  }
})
export default TotalLoginPage
</script>
<style lang="sass">

</style>
