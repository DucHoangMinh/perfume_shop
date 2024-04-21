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
          label="Tên tiếng Việt"
          density="comfortable"
          type="text"
          v-model="perfumeFragrant.name_vn"
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Tên tiếng Anh"
          density="comfortable"
          type="text"
          v-model="perfumeFragrant.name_en"
          variant="outlined"
        )
      v-row.w-full.pa-0.d-flex.justify-space-around
        .v-col-3.text-center.pb-0
          v-btn(variant="outlined" color="red" @click="emit('close-modal')").w-100 Hủy
        .v-col-3.text-center.pb-0
          v-btn(variant="outlined" color="primary" @click="handleSaveFragrant").w-100 Lưu

</template>
<script setup lang="js">
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import { mdiClose } from "@mdi/js";
import {ref} from "vue";
import {useMainStore} from "@/stores/main";
import {tr} from "vuetify/locale";
import {api, showNotification} from "@/common";

const store = useMainStore()
const emit = defineEmits(['close-modal', 'save-success'])
const props = defineProps({
  show:{
    type:Boolean,
    required:true,
    default:false
  },
  title: {
    type: String,
    required: true
  }
})

const perfumeFragrant = ref({
  name_en: "",
  name_vn: ""
})
const handleSaveFragrant = async () => {
  try {
    store.setLoading(true)
    await api.post('/perfume_fragnant/', perfumeFragrant.value)
    emit('save-success')
  } catch (e) {
    store.setLoading(false)
    showNotification.error('Lỗi hệ thống, vui lòng thử lại!')
  }
}
</script>
<style scoped lang="sass">

</style>
