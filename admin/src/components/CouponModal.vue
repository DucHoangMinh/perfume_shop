<script setup>
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import {mdiClose} from "@mdi/js";
import {percentageList} from "@/common";
import {ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import PerfumeListModal from "@/components/PerfumeListModal.vue";

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

const coupon = ref({
  period_from: "",
  period_to: "",
  code: "",
  percentage: 0,
  name: "",
  list_product_id: []
})
const openPerfumeListModal = ref(false)
const emit = defineEmits(['close-modal', 'change-selected-list'])
const changeSelectedList = (selectedList) => {
  emit('change-selected-list', selectedList)
}
</script>

<template lang="pug">
.coupon-modal
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
            label="Tên mã giảm giá"
            density="comfortable"
            required
            type="text"
            v-model="coupon.name"
            variant="outlined"
          )
        v-col(cols="12").w-full.pa-0
          v-text-field(
            hide-details
            label="Mã code"
            density="comfortable"
            required
            type="text"
            v-model="coupon.code"
            variant="outlined"
          )
        v-col(cols="12").w-full.pa-0
          v-autocomplete(
            label="Phần trăm giảm giá"
            :items="percentageList"
            density="comfortable"
            variant="outlined"
            v-model="coupon.percentage"
            hide-details
          )
        v-row
          v-col(cols="6").px-2.w-full.pa-0
            p Thời gian bắt đầu
            vue-date-picker(
              v-model="coupon.period_from"
            )
          v-col(cols="6").px-2.w-full.pa-0
            p Thời gian kết thúc
            vue-date-picker(
              v-model="coupon.period_to"
            )
        v-col(cols="12").d-flex.w-full.pa-0.align-center.justify-space-between
          p Danh sách sản phẩm:
          v-btn(
            variant="text"
            density="comfortable"
            @click="openPerfumeListModal = true"
          ) Chọn sản phẩm
        v-col(cols="12").d-flex.w-full.pa-0.align-center.justify-space-around
          v-btn(
            variant="outlined"
          ) Lưu mã
  perfume-list-modal(
    :show="openPerfumeListModal"
    @close-modal="openPerfumeListModal = false"
    @change-selected-list="changeSelectedList"
  )
</template>

<style scoped lang="sass">

</style>
