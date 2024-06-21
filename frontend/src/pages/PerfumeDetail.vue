<script setup lang="js">
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {api, showNotification} from "@/common";
const route = useRoute()
const pdId = computed(() => {
  return route.query.id
})
const perfumeDetail = ref({})
const currentMainImageLink = ref('')
const getPerfumeDetail = async () => {
  try {
    const { data } = await api.get(`/perfume_detail/${pdId.value}`)
    perfumeDetail.value = data
    currentMainImageLink.value = perfumeDetail.value.images[0]
  } catch (e) {
    showNotification.error('Lỗi khi tải sản phẩm')
  }
}
const init = async () => {
  await getPerfumeDetail()
}
onMounted(init)
</script>

<template lang="pug">
.font-sans.bg-white
  .p-4.max-w-4xl.mx-auto(class='lg:max-w-7xl')
    .grid.items-start.grid-cols-1.gap-12.p-6.rounded-lg(class='lg:grid-cols-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]')
      .w-full.top-0.text-center(class='lg:col-span-3 lg:sticky')
        .px-4.py-10.rounded-lg.relative(class='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]')
          img.rounded.object-cover.mx-auto(:src="currentMainImageLink" alt='Product' class='w-3/4')
          button.absolute.top-4.right-4(type='button')
            svg.mr-1(xmlns='http://www.w3.org/2000/svg' width='20px' fill='#ccc' class='hover:fill-[#333]' viewbox='0 0 64 64')
              path(d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z' data-original='#000000')
        .mt-6.flex.flex-wrap.justify-center.gap-6.mx-auto
          .w-24.h-20.flex.items-center.justify-center.rounded-lg.p-4.cursor-pointer(
            class='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]'
            v-for="imageLink in perfumeDetail.images"
            @click="currentMainImageLink = imageLink"
          )
            img.w-full(:src="imageLink" alt='Product2')
      div(class='lg:col-span-2')
        h2.text-2xl.font-weight-bold.text-gray-800 {{perfumeDetail.name}} | {{perfumeDetail?.branch?.name}}
        .d-flex.space-x-2.mt-4(style="max-height: 50px")
          svg.w-5.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
          svg.w-5.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
          svg.w-5.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
          svg.w-5.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
          svg.w-5(class='fill-[#CED5D8]' viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
          h4.text-gray-800.text-base 500 Reviews
        .flex.flex-wrap.gap-4.mt-8(v-if="perfumeDetail.current_sale_price")
          p.text-gray-800.text-3xl.font-bold {{perfumeDetail.current_sale_price}}vnđ
          p.text-gray-400.text-base
            strike {{perfumeDetail.price}}vnđ
            span.text-sm.ml-1 Tax included
        .flex.flex-wrap.gap-4.mt-8(v-else)
          p.text-gray-800.text-3xl.font-bold {{perfumeDetail.price?.toLocaleString('vi-VN')}} VND
        .mt-8
          p Dung tích: {{perfumeDetail.volume}} ml
          p Nồng độ: {{perfumeDetail.concentration}} %
          p Mùi hương: {{perfumeDetail.fragnant?.name_vn}}
          p Mô tả: {{perfumeDetail.description}}
        .flex.flex-wrap.gap-4.mt-8
          button.px-4.py-3.bg-black.text-white.text-sm.font-semibold.rounded(type='button' class='min-w-[200px] hover:bg-blue-700') Mua hàng
          button.px-4.border.border-blue-600.bg-transparent.text-gray-800.text-sm.font-semibold.rounded(type='button' class='min-w-[200px] py-2.5 hover:bg-gray-50') Thêm vào giỏ hàng
    //.mt-16.p-6(class='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]')
    //  h3.text-xl.font-bold.text-gray-800 Product information
    //  ul.mt-4.space-y-6.text-gray-800
    //    li.text-sm
    //      | TYPE
    //      span.ml-4.float-right LAPTOP
    //    li.text-sm
    //      | RAM
    //      span.ml-4.float-right 16 BG
    //    li.text-sm
    //      | SSD
    //      span.ml-4.float-right 1000 BG
    //    li.text-sm
    //      | PROCESSOR TYPE
    //      span.ml-4.float-right INTEL CORE I7-12700H
    //    li.text-sm
    //      | PROCESSOR SPEED
    //      span.ml-4.float-right 2.3 - 4.7 GHz
    //    li.text-sm
    //      | DISPLAY SIZE INCH
    //      span.ml-4.float-right 16.0
    //    li.text-sm
    //      | DISPLAY SIZE SM
    //      span.ml-4.float-right 40.64 cm
    //    li.text-sm
    //      | DISPLAY TYPE
    //      span.ml-4.float-right OLED, TOUCHSCREEN, 120 Hz
    //    li.text-sm
    //      | DISPLAY RESOLUTION
    //      span.ml-4.float-right 2880x1620
    //.mt-16.p-6(class='shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]')
    //  h3.text-xl.font-bold.text-gray-800 Reviews(10)
    //  .grid.gap-12.mt-4(class='md:grid-cols-2')
    //    .space-y-3
    //      .flex.items-center
    //        p.text-sm.text-gray-800.font-bold 5.0
    //        svg.w-5.fill-blue-600.ml-1(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //          path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //        .bg-gray-400.rounded.w-full.h-2.ml-3
    //          .h-full.rounded.bg-blue-600(class='w-2/3')
    //        p.text-sm.text-gray-800.font-bold.ml-3 66%
    //      .flex.items-center
    //        p.text-sm.text-gray-800.font-bold 4.0
    //        svg.w-5.fill-blue-600.ml-1(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //          path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //        .bg-gray-400.rounded.w-full.h-2.ml-3
    //          .h-full.rounded.bg-blue-600(class='w-1/3')
    //        p.text-sm.text-gray-800.font-bold.ml-3 33%
    //      .flex.items-center
    //        p.text-sm.text-gray-800.font-bold 3.0
    //        svg.w-5.fill-blue-600.ml-1(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //          path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //        .bg-gray-400.rounded.w-full.h-2.ml-3
    //          .h-full.rounded.bg-blue-600(class='w-1/6')
    //        p.text-sm.text-gray-800.font-bold.ml-3 16%
    //      .flex.items-center
    //        p.text-sm.text-gray-800.font-bold 2.0
    //        svg.w-5.fill-blue-600.ml-1(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //          path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //        .bg-gray-400.rounded.w-full.h-2.ml-3
    //          .h-full.rounded.bg-blue-600(class='w-1/12')
    //        p.text-sm.text-gray-800.font-bold.ml-3 8%
    //      .flex.items-center
    //        p.text-sm.text-gray-800.font-bold 1.0
    //        svg.w-5.fill-blue-600.ml-1(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //          path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //        .bg-gray-400.rounded.w-full.h-2.ml-3
    //          .h-full.rounded.bg-blue-600(class='w-[6%]')
    //        p.text-sm.text-gray-800.font-bold.ml-3 6%
    //    div
    //      .flex.items-start
    //        img.w-12.h-12.rounded-full.border-2.border-white(src='https://readymadeui.com/team-2.webp')
    //        .ml-3
    //          h4.text-sm.font-bold.text-gray-800 John Doe
    //          .flex.space-x-1.mt-1
    //            svg.w-4.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //              path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //            svg.w-4.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //              path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //            svg.w-4.fill-blue-600(viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //              path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //            svg.w-4(class='fill-[#CED5D8]' viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //              path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //            svg.w-4(class='fill-[#CED5D8]' viewbox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg')
    //              path(d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z')
    //            p.text-xs.font-semibold.text-gray-800(class='!ml-2') 2 mins ago
    //          p.text-sm.mt-4.text-gray-800
    //            | Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
    //      button.w-full.mt-10.px-4.bg-transparent.border.border-blue-600.text-gray-800.font-bold.rounded(type='button' class='py-2.5 hover:bg-gray-50') Read all reviews
</template>

<style scoped lang="sass">
p, h2
  font-family: 'Lexend', sans-serif
</style>
