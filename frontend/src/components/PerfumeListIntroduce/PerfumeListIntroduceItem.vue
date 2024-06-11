<template lang="pug">
.perfume-list-introduce-item
  .image.position-relative
    img(:src="perfumeDetail.images[0]" style="width: 100%")
    .sale-percentage.position-absolute
      p.text-white.text-center - {{perfumeDetail.sale_percentage}}%
  .infor
    p.text-center.p-name {{perfumeDetail.name}}
    .sale-price.text-center
      span.new-price {{perfumeDetail.current_sale_price}}đ &nbsp;
      span.old-price {{perfumeDetail.price}}
</template>
<script lang="js">
import {defineComponent} from "vue";

const PerfumeListIntroduceItem = defineComponent({
  props: {
    perfumeDetail: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  setup(){
    return {
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
</style>
