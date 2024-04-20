<template lang="pug">
overlay-layer(v-show="show" v-if="show")
  card-box(
    class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
    is-modal
  )
    card-box-component-title(:title="title")
      base-button(
        :icon="mdiClose"
        color="whiteDark"
        @click="emit('close-modal')"
        small
        rounded-full
      )
    .space-y-3
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Tên"
          density="comfortable"
          :disabled="viewOnly"
          :counter="10"
          required
          type="text"
          v-model="perfumeBranch.name"
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-autocomplete(
          label="Quốc gia xuất xứ"
          :items="countryList"
          density="comfortable"
          variant="outlined"
          v-model="perfumeBranch.country_of_origin"
          hide-details
        )
      v-col(cols="12").w-full.pa-0
        v-autocomplete(
          label="Năm thành lập"
          :items="yearList"
          v-model="perfumeBranch.founded_year"
          density="comfortable"
          variant="outlined"
          hide-details
        )
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Email"
          density="comfortable"
          :disabled="viewOnly"
          :counter="10"
          required
          type="email"
          v-model="perfumeBranch.email"
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Website"
          density="comfortable"
          :disabled="viewOnly"
          :counter="10"
          required
          type="website"
          v-model="perfumeBranch.website"
          variant="outlined"
        )
      v-row.w-full.pa-0.d-flex.justify-space-around
        .v-col-3.text-center.pb-0
          v-btn(variant="outlined" color="red" @click="emit('close-modal')").w-100 Hủy
        .v-col-3.text-center.pb-0
          v-btn(variant="outlined" color="primary" @click="handleSavePerfumeBranch").w-100 Lưu
</template>
<script setup lang="js">
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import { mdiClose } from "@mdi/js";
import {computed, ref} from "vue";
import {api, showNotification, yearList} from "@/common";
import {useMainStore} from "@/stores/main";

const store = useMainStore()
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  }
})

const emit = defineEmits(['close-modal', 'add-success'])

const viewOnly = ref(false)
const countryList = computed(() => store.countryNameList)
const perfumeBranch = ref({
  name: "",
  country_of_origin: "",
  email: "",
  founded_year: "",
  website: ""
})

const handleSavePerfumeBranch = async () => {
  try {
    store.setLoading(true)
    await api.post('/perfume_branch/', perfumeBranch.value)
    emit('add-success')
  } catch (e) {
    showNotification.error('Lỗi hệ thống, vui lòng thử lại!')
  } finally {
    store.setLoading(false)
  }
}

</script>
<style scoped lang="sass">

</style>
