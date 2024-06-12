<template lang="pug">
div.home-page
  .slider-banner.position-relative
    v-img(:src="slider_banner_images[currentSliderImageIndex]")
    .position-absolute.slider-action-button
      .d-flex.justify-space-between(style="width: 99vw")
        v-icon.slider-button(icon="mdi-chevron-left" @click="() => handleOtherPhoto('prev')" style="font-size: 80px; opacity: 0.7")
        v-icon.slider-button(icon="mdi-chevron-right" @click="() => handleOtherPhoto('next')" style="font-size: 80px; opacity: 0.7")
  v-container
    .having-sale.text-center
      perfume-list-introduce(
        perfume-list-name="Ưu đãi"
        :perfume-list="perfumeHavingSale"
        :is-sale="true"
      )
      v-btn.my-6(
        variant="outlined"
      ) Xem thêm
    .by-fragrant.text-center
      perfume-list-introduce(
        perfume-list-name="Nước hoa theo mùi hương"
        :perfume-list="currentPerfumeByFragrant"
        :select-filter-list="perfumeFragrant"
        @change-tab="changeFilterSelectFragrant"
      )
      v-btn.my-6(
        variant="outlined"
      ) Xem thêm

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
    const perfumeFragrant = ref([])
    const allPerfumeList = ref([])
    const currentPerfumeByFragrant = ref([])
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
    const getPerfumeFragrant = async () => {
      try {
        const { data } = await api.get('/perfume_fragnant/')
        perfumeFragrant.value = data
      } catch (e) {
        showNotification.error('Lỗi khi tải dữ liệu')
      }
    }
    const getAllPerfumeList = async () => {
      try {
        const { data } = await api.get('/perfume_detail/all')
        allPerfumeList.value = data
      } catch (e) {
        showNotification.error('Lỗi khi tải dữ liệu')
      }
    }
    const changeFilterSelectFragrant = (selected) => {
      currentPerfumeByFragrant.value = allPerfumeList.value.filter(pf => pf.fragnant.id === selected)
    }
    const init = async () => {
      await getPerfumeHavingSale()
      await getPerfumeFragrant()
      await getAllPerfumeList()
      changeFilterSelectFragrant(1)
    }
    onMounted(init)
    return {
      currentSliderImageIndex ,
      slider_banner_images,
      handleOtherPhoto,
      perfumeHavingSale,
      perfumeFragrant,
      changeFilterSelectFragrant,
      allPerfumeList,
      currentPerfumeByFragrant
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
