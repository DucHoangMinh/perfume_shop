<template lang="pug">
  div
    v-form
      v-container(
        fluid
      ).d-flex.flex-column.justify-center.align-center
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            label="Họ và tên"
            density="comfortable"
            v-model="registerData.fullname"
            required
            variant="outlined"
          )
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            label="Username"
            v-model="registerData.username"
            density="comfortable"
            required
            variant="outlined"
          )
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            label="Email"
            v-model="registerData.email"
            density="comfortable"
            required
            variant="outlined"
          )
        v-col(cols="12" md="4").d-flex.align-center.py-0
          p Giới tính
          v-radio-group(inline hide-details)
            v-radio(label="Nam" value="true" v-model="registerData.gender")
            v-radio(label="Nữ" value="false" v-model="registerData.gender")
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            density="comfortable"
            label="Địa chỉ"
            v-model="registerData.address"
            variant="outlined"
          )
        v-col(cols="12" md="4").d-flex.align-center.py-0
          p SĐT
          v-otp-input.pa-0(
            length="10"
            v-model="registerData.phone"
            variant="underlined"
          )
        v-col(cols="12" md="4")
          v-text-field(
            label="Mật khẩu"
            density="comfortable"
            v-model="registerData.password"
            type="password"
            variant="outlined"
            hide-details
          )
        v-col(cols="12" md="4")
          v-text-field(
            label="Nhập lại mật khẩu"
            density="comfortable"
            type="password"
            v-model="registerData.password_confirmation"
            variant="outlined"
            hide-details
          )
        v-col(cols="12" md="4").pt-0.text-center
          v-btn(
            type="submit"
            variant="outlined"
            block
          ) Đăng ký


</template>
<script lang="js">
import {defineComponent, ref} from "vue";

const RegisterPage = defineComponent({
  name: "RegisterPage",
  setup() {
    const registerData = ref({
      fullname: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      gender: true,
      address: '',
      phone: 0
    })
    return {
      registerData
    }
  }
})
export default RegisterPage
</script>
<style lang="sass">

</style>
