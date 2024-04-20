<script setup>
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";

const emit = defineEmits(['on-cancel', 'on-confirm'])

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
    default: false
  },
  title: {
    type: String,
    required: false,
    default: ""
  },
  message: {
    type: String,
    required: true,
    default: ""
  }
})
</script>

<template lang="pug">
overlay-layer(v-show="show" v-if="show")
  card-box(
    v-show="show"
    class="shadow-lg max-h-modal w-10/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
    is-modal
  )
    card-box-component-title(:title="title")
    .space-y-3
      p.text-body-1 {{message}}
      v-row.w-full.pa-0.d-flex.justify-space-around
        .v-col-3.text-center
          v-btn(variant="outlined" color="red" @click="emit('on-cancel')").w-100 Hủy
        .v-col-3.text-center
          v-btn(variant="outlined" color="primary" @click="emit('on-confirm')").w-100 Xác nhận
</template>

<style scoped lang="sass">

</style>
