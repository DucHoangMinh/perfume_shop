<template lang="pug">
.perfume-list-introduce-item(@click="() => goToPerfumeDetail(perfumeDetail.id)")
  .image.position-relative
    img(:src="perfumeDetail.images[0]" style="width: 100%")
    .sale-percentage.position-absolute(v-if="isSale")
      p.text-white.text-center - {{perfumeDetail.sale_percentage}}%
  .infor
    p.text-center.p-name {{perfumeDetail.name}}
    .sale-price.text-center(v-if="isSale")
      span.new-price {{perfumeDetail.current_sale_price}}đ &nbsp;
      span.old-price {{perfumeDetail.price}}
    .sale-price.text-center(v-if="!isSale")
      span.current-price {{perfumeDetail.price}}đ
</template>
<script lang="js">
import {defineComponent} from "vue";
import {useRoute, useRouter} from "vue-router";

const PerfumeListIntroduceItem = defineComponent({
  props: {
    perfumeDetail: {
      type: Object,
      required: true,
      default: () => {}
    },
    isSale: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(){
    const route = useRoute()
    const router = useRouter()
    const goToPerfumeDetail = async (pdId) => {
      await router.push(`/perfume_detail?id=${pdId}`)
    }
    return {
      goToPerfumeDetail
    }
  }
})
export default PerfumeListIntroduceItem
</script>
<style scoped lang="sass">
.p-name
  font-family: 'Lexend', sans-serif
.old-price
  font-family: 'Lexend', sans-serif
  color: #939393
  font-size: 14px
  margin-left: 5px
  font-weight: normal
  text-decoration: line-through
.new-price
  color: #d0021b
  font-family: 'Lexend', sans-serif
.perfume-list-introduce-item
  cursor: pointer
.perfume-list-introduce-item:hover
  transform: translateY(-8px)
.sale-percentage
  width: 50px
  background: #d0021b
  top: 10px
  left: 10px
  font-family: 'Lexend', sans-serif
  font-size: 14px
.current-price
  font-family: 'Lexend', sans-serif
</style>
