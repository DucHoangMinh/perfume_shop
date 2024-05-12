<script setup>
import {ref} from 'vue'
import BaseIcon from "@/components/BaseIcon.vue";
import {mdiChevronLeft, mdiChevronRight} from "@mdi/js";

const mockdata = {
  "branch": {
    "country_of_origin": "Antarctica",
    "email": "hoangminhduc4125@gmail.com",
    "founded_year": 2003,
    "id": 1,
    "is_active": true,
    "name": "Dior",
    "website": "test.com.vn"
  },
  "concentration": 10,
  "current_coupon_id": {
    "code": "test2",
    "id": 1,
    "is_active": true,
    "list_product_id": [
      1,
      2
    ],
    "name": "test2",
    "percentage": 25,
    "period_from": "Mon, 22 Apr 2024 06:00:00 GMT",
    "period_to": "Sat, 25 May 2024 06:00:00 GMT"
  },
  "current_sale_price": 91672,
  "description": "No desc",
  "fragnant": {
    "id": 2,
    "is_active": true,
    "name_en": "Fresh",
    "name_vn": "Hương tươi mát"
  },
  "gender": true,
  "id": 1,
  "images": [
    "https://firebasestorage.googleapis.com/v0/b/perfumeshop-44117.appspot.com/o/products%2Fsauvage-cologne.jpgThu%20May%2009%202024%2014%3A44%3A54%20GMT%2B0700%20(Indochina%20Time)?alt=media&token=643a5c27-b6b5-410d-8aff-ce9ff9b221cd",
    "https://firebasestorage.googleapis.com/v0/b/perfumeshop-44117.appspot.com/o/products%2Fsauvage-men-eau-de-parfum-spray-3-4-oz-100-ml.jpgThu%20May%2009%202024%2014%3A44%3A54%20GMT%2B0700%20(Indochina%20Time)?alt=media&token=8142a738-2c50-4290-bfcf-e9f50e0b39ad",
    "https://firebasestorage.googleapis.com/v0/b/perfumeshop-44117.appspot.com/o/products%2Fsauvage-men-eau-de-parfum-spray-tester-3-4-oz-100-ml.jpgThu%20May%2009%202024%2014%3A44%3A55%20GMT%2B0700%20(Indochina%20Time)?alt=media&token=01aad180-c9b2-4238-b642-f239e32f5bb0"
  ],
  "ingredients": "",
  "is_active": true,
  "name": "Nước hoa NF3",
  "notes": "No note",
  "price": 122230,
  "volume": 10
}
const currentPfImagesIndex = ref(0)
const handleOtherPhoto = (type) => {
  const lenImgList = mockdata.images.length
  if(type === "prev"){
    currentPfImagesIndex.value = currentPfImagesIndex.value === 0 ? lenImgList - 1 : currentPfImagesIndex.value - 1
    return
  }
  if(type === 'next'){
    currentPfImagesIndex.value = currentPfImagesIndex.value === lenImgList - 1 ? 0 : currentPfImagesIndex.value + 1
    return
  }
}
</script>

<template lang="pug">
.single-perfume
  .perfume-image.position-relative
    img(:src="mockdata.images[currentPfImagesIndex]" style="border-radius:6px")
    .position-absolute.slider-action-button(style="width: 100%")
      .d-flex.justify-space-between
        .icon-area(@click="() => handleOtherPhoto('prev')")
          base-icon.text-grey(:path="mdiChevronLeft")
        .icon-area(@click="() => handleOtherPhoto('next')")
          base-icon(:path="mdiChevronRight")
  .detail-infor.text-center
    p.font-weight-bold {{mockdata.name}}
    p {{mockdata.branch.name}} - {{mockdata.fragnant.name_vn}}
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
</style>
