<script setup>
import {ref, toRef, toRefs} from 'vue'
import BaseIcon from "@/components/BaseIcon.vue";
import {mdiChevronLeft, mdiChevronRight} from "@mdi/js";
import FormCheckRadio from "@/components/FormCheckRadio.vue";

const props = defineProps({
  perfumeDetail : {
    type: Object,
    default : {
      images : [],
      name : '',
      branch : {
        name : ''
      },
      fragnant : {
        name_vn : ''
      }
    },
    required: true,
    haveCheckBox: {
      type: Boolean,
      default: false
    }
  }
})
const currentPfImagesIndex = ref(0)
const { perfumeDetail } = toRefs(props)
const handleOtherPhoto = (type) => {
  const lenImgList = props.perfumeDetail.images.length
  if(type === "prev"){
    currentPfImagesIndex.value = currentPfImagesIndex.value === 0 ? lenImgList - 1 : currentPfImagesIndex.value - 1
    return
  }
  if(type === 'next'){
    currentPfImagesIndex.value = currentPfImagesIndex.value === lenImgList - 1 ? 0 : currentPfImagesIndex.value + 1
    return
  }
}
const emit = defineEmits(['click-checkbox'])
const updateValue = (val) => {
  perfumeDetail.isCheck = val
}
</script>

<template lang="pug">
.single-perfume.position-relative
  .perfume-image.position-relative
    img(:src="perfumeDetail.images[currentPfImagesIndex]" style="border-radius:6px")
    .position-absolute.slider-action-button(style="width: 100%")
      .d-flex.justify-space-between
        .icon-area(@click="() => handleOtherPhoto('prev')")
          base-icon.text-grey(:path="mdiChevronLeft")
        .icon-area(@click="() => handleOtherPhoto('next')")
          base-icon(:path="mdiChevronRight")
  .detail-infor.text-center
    p.font-weight-bold {{perfumeDetail.name}}
    p {{perfumeDetail.branch.name}} - {{perfumeDetail.fragnant.name_vn}}
  .checkbox.position-absolute
    input(
      type="checkbox"
      v-model="perfumeDetail.isCheck"
      name="heheh"
      @change="() => emit('click-checkbox', perfumeDetail)"
    )
</template>

<style scoped lang="sass">
.single-perfume
  border: 1px solid #ccc
  max-width: 250px
  border-radius: 6px
.slider-action-button
  top: 50%
.icon-area
  background-color: white
  border-radius: 50%
  border: 1px solid #ccc
  cursor: pointer
.checkbox
  top: 12px
  left: 4px
::v-deep .checkbox input[type='checkbox'], .radio input[type='radio'], .switch input[type='checkbox']
  opacity: 1
  z-index: 10
  border: 1px solid #ccc
</style>
