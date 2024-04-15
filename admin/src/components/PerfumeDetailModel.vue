<template lang="pug">
overlay-layer(v-show="value" )
  card-box(
    v-show="value"
    class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
    is-modal
  )
    card-box-component-title(:title="title")
      base-button(
        v-if="hasCancel"
        :icon="mdiClose"
        color="whiteDark"
        small
        rounded-full
        @click.prevent="cancel"
      )
    .space-y-3
      p Hahaha
      slot

</template>
<script setup lang="js">
import {computed} from "vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import {mdiClose} from "@mdi/js";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  title: {
    type: String,
    required: true
  },
  hasCancel: Boolean
})
const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})


</script>
<style lang="sass">

</style>
