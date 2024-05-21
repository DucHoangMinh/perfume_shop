<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import { useMainStore } from '@/stores/main'
import { api, showNotification } from '@/common'

const form = reactive({
  email: '',
  password: '',
  remember: true
})
const store = useMainStore()
const router = useRouter()

const submit = async () => {
  const payload = {
    email: form.email,
    password: form.password
  }
  try {
    const { data } = await api.post("/user/login?admin=true", payload)
    await store.setAccountData(data)
    router.push("/dashboard")
  } catch (e) {
    showNotification.error("Lỗi, vui lòng thử lại")
  }
}
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <p class="font-weight-bold text-center text-body-1 border-b mb-4">Vui lòng đăng nhập bằng tài khoản admin để tiếp tục</p>
        <FormField label="Email" help="Vui lòng nhập email của bạn">
          <FormControl
            v-model="form.email"
            :icon="mdiAccount"
            name="email"
            autocomplete="email"
          />
        </FormField>

        <FormField label="Mật khẩu" help="Vui lòng nhập mật khẩu của bạn">
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Nhớ mật khẩu"
          :input-value="true"
        />

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Đăng nhập" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
