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
            :rules="registerDataRule.fullnameRules"
            required
            variant="outlined"
          )
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            label="Username"
            v-model="registerData.username"
            :rules="registerDataRule.usernameRules"
            density="comfortable"
            required
            variant="outlined"
          )
        v-col(cols="12" md="4")
          v-text-field(
            hide-details
            label="Email"
            v-model="registerData.email"
            :rules="registerDataRule.emailRules"
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
            :rules="registerDataRule.addressRules"
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
            :rules="registerDataRule.passwordRules"
            required
            variant="outlined"
            hide-details
          )
        v-col(cols="12" md="4")
          v-text-field(
            label="Nhập lại mật khẩu"
            density="comfortable"
            type="password"
            :rules="registerDataRule.passwordConfirmationRules"
            required
            v-model="registerData.password_confirmation"
            variant="outlined"
            hide-details
          )
        v-col(cols="12" md="4").pt-0.text-center
          v-btn(
            @submit.prevent
            @click="validateDataRegister"
            type="submit"
            variant="outlined"
            block
          ) Đăng ký


</template>
<script lang="js">
import {defineComponent, ref} from "vue";
import {showNotification} from "@/common";

const RegisterPage = defineComponent({
  name: "RegisterPage",
  setup() {

    const totalErrors = ref([])

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
    const registerDataRule = ref({
      fullnameRules: [
        value => {
          if(value) return true
          return "Vui lòng nhập đầy đủ họ và tên!"
        }
      ],
      usernameRules: [
        value => {
          if(value) return true
          return "Vui lòng nhập đầy đủ username!"
        }
      ],
      emailRules: [
        value => {
          if (value) return true
          return 'Vui lòng nhập đầy đủ email!'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true
          return 'Email chưa đúng định dạng!'
        }
      ],
      addressRules: [
        value => {
          if (value) return true
          return 'Vui lòng nhập địa chỉ của bạn!'
        }
      ],
      phoneRules: [
        value => {
          if (value) return true
          return 'Vui lòng nhập số điện thoại của bạn!'
        },
        value => {
          if(value.length === 10 || value.toString().startsWith('0')) return true
          return "Số điện thoại phải có 10 số và bắt đầu từ số 0!"
        }
      ],
      passwordRules: [
        value => {
          if (value) return true
          return 'Vui lòng nhập đầy đủ mật khẩu của bạn!'
        },
        value => {
          if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) return true
          return 'Mật khẩu phải bao gồm ít nhất 8 ký tự, và gồm ít nhất 1 chữ cái và 1 chữ số!'
        },
      ],
      passwordConfirmationRules: [
        value => {
          if (value) return true
          return 'Vui lòng xác nhận lại mật khẩu của bạn!'
        },
        (value, password) => {
          if(value == password) return true
          return 'Mật khẩu nhập lại không trùng khớp!'
        }
      ]
    })

    const validateDataRegister = () => {
      totalErrors.value = []
      registerDataRule.value.fullnameRules.forEach(rule => {
        const error = rule(registerData.value.fullname)
        if(error){
          totalErrors.value.push(error)
        }
      })
      registerDataRule.value.usernameRules.forEach(rule => {
        const error = rule(registerData.value.username)
        if(error) totalErrors.value.push(error)
      })
      registerDataRule.value.emailRules.forEach(rule => {
        const error = rule(registerData.value.email)
        if(error) totalErrors.value.push(error)
      })
      registerDataRule.value.addressRules.forEach(rule => {
        const error = rule(registerData.value.address)
        if(error) totalErrors.value.push(error)
      })
      registerDataRule.value.phoneRules.forEach(rule => {
        const error = rule(registerData.value.phone)
        if(error) totalErrors.value.push(error)
      })
      registerDataRule.value.passwordRules.forEach(rule => {
        const error = rule(registerData.value.password)
        if(error) totalErrors.value.push(error)
      })
      registerDataRule.value.passwordConfirmationRules.forEach(rule => {
        const error = rule(registerData.value.password_confirmation, registerData.value.password)
        if(error) totalErrors.value.push(error)
      })
      if(totalErrors.value.length > 0){
        totalErrors.value.forEach(error => {
          if(error !== true) showNotification.warning(error)
        })
      }
    }

    return {
      registerData,
      registerDataRule,
      validateDataRegister,
      totalErrors
    }
  }
})
export default RegisterPage
</script>
<style lang="sass">

</style>
