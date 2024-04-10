<template lang="pug">
div.home-page
  .slider-banner.position-relative
    v-img(:src="slider_banner_images[currentSliderImageIndex]")
    .position-absolute.slider-action-button
      .d-flex.justify-space-between(style="width: 99vw")
        v-icon.slider-button(icon="mdi-chevron-left" @click="() => handleOtherPhoto('prev')" style="font-size: 80px; opacity: 0.7")
        v-icon.slider-button(icon="mdi-chevron-right" @click="() => handleOtherPhoto('next')" style="font-size: 80px; opacity: 0.7")
  v-container
    perfume-list-introduce(
      perfume-list-name="Ưu đãi"
    )
</template>

<script lang="js">
import {defineComponent, ref} from "vue";
import {slider_banner_images} from "@/assets/assets";
import PerfumeListIntroduce from "@/components/PerfumeListIntroduce/index.vue";
const HomePage = defineComponent({
  components: {
    PerfumeListIntroduce
  },
  setup(){
    const currentSliderImageIndex = ref(0)
    const handleOtherPhoto = (type) => {
      const lenImgList = slider_banner_images.length
      if(type === "prev"){
        currentSliderImageIndex.value = currentSliderImageIndex.value === 0 ? lenImgList - 1 : currentSliderImageIndex.value - 1
        return
      }
      if(type === 'next'){
        currentSliderImageIndex.value = currentSliderImageIndex.value === lenImgList - 1 ? 0 : currentSliderImageIndex.value + 1
        return
      }
    }
    return {
      currentSliderImageIndex ,
      slider_banner_images,
      handleOtherPhoto
    }
  }
})
export default HomePage
</script>
<style lang="sass" scoped>
.slider-action-button
  top: 50%
.slider-button:hover
  color: beige
</style>
