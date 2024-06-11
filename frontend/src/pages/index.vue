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
      :perfume-list="perfumeHavingSale"
    )
</template>

<script lang="js">
import {defineComponent, onMounted, ref} from "vue";
import {slider_banner_images} from "@/assets/assets";
import PerfumeListIntroduce from "@/components/PerfumeListIntroduce/index.vue";
import {api, showNotification} from "@/common";
const HomePage = defineComponent({
  components: {
    PerfumeListIntroduce
  },
  setup(){
    const currentSliderImageIndex = ref(0)
    const perfumeHavingSale = ref([])
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
    const getPerfumeHavingSale = async () => {
      try {
        const { data } = await api.get('/perfume_detail/having_sale')
        perfumeHavingSale.value = data
      } catch (e) {
        showNotification.error('Lỗi khi tải dữ liệu')
      }
    }

    const init = async () => {
      await getPerfumeHavingSale()
    }
    onMounted(init)
    return {
      currentSliderImageIndex ,
      slider_banner_images,
      handleOtherPhoto,
      perfumeHavingSale
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
