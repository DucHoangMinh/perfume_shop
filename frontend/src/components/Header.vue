<template lang="pug">
div.header.d-flex.justify-space-around.align-end.position-relative
  v-menu.introduceMenu(open-on-hover)
    template(v-slot:activator="{ props }")
      p.menu-text(v-bind="props").text-white.cursor-pointer.mb-3 Giới thiệu
    v-card.mx-auto(max-width="330")
      v-list(:items="introduceList").cursor-pointer
  v-menu.perfumeMenu(open-on-hover)
    template(v-slot:activator="{ props }")
      p.menu-text(v-bind="props").text-white.cursor-pointer.mb-3 Nước hoa
    v-card.mx-auto(max-width="330")
      v-list(:items="perfumeList").cursor-pointer
  .logo.cursor-pointer
    router-link(to="/" )
      img.logo-image(src="../assets/logo.svg")
  v-menu.otherProductMenu(open-on-hover)
    template(v-slot:activator="{ props }")
      p.menu-text(v-bind="props").text-white.cursor-pointer.mb-3 Sản phẩm khác
    v-card.mx-auto(max-width="330")
      v-list(:items="otherProductsList").cursor-pointer
  v-menu.saleList(open-on-hover)
    template(v-slot:activator="{ props }")
      p.menu-text(v-bind="props").text-white.cursor-pointer.mb-3 Ưu đãi
    v-card.mx-auto(max-width="330")
      v-list(:items="saleList").cursor-pointer
  .sub-function
    .account.d-flex
      router-link(to="/account" v-if="!userInfor")
        v-icon(icon="mdi-account").text-white.mr-2 mdi-account
      router-link(to="#" v-if="userInfor").text-decoration-none.font-weight-bold.mr-2
        p.text-white {{userInfor.fullname}}
      router-link(to="#")
        v-icon(icon="mdi mdi-magnify").mr-2.text-white
      router-link(to="#")
        v-icon(icon="mdi mdi-cart").text-white
    .divider.mt-1


</template>
<script lang="js">
import {defineComponent, onMounted, ref} from "vue";
import {cookie} from "@/common";

const HeaderBar = defineComponent({
  props: {
    userInfor: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        fullname: ''
      },
      required: true
    }
  },
  setup(){
    const introduceList = ref([
      {
        title: 'Về chúng tôi'
      },
      {
        title: 'Hệ thống cửa hàng'
      }
    ])
    const perfumeList = ref([
      {
        title: 'Amber (hổ phách)'
      },
      {
        title: 'Flora (hương hoa cỏ)'
      },
      {
        title: 'Woody (hương gỗ)'
      },
      {
        title: 'Musk (xạ hương)'
      }
    ])
    const otherProductsList = ref([
      {
        title: 'Sữa tắm nước hoa'
      },
      {
        title: 'Sáp thơm phòng'
      }
    ])
    const saleList = ref([
      {
        title: 'Mua 1 tặng 1'
      },
      {
        title: '50%'
      },
      {
        title: '20%'
      }
    ])
    const userInfor = ref(cookie.getUser())

    onMounted(() => {
      console.log(userInfor)
    })
    return{
      introduceList,
      perfumeList,
      otherProductsList,
      saleList
    }
  }
})
export default HeaderBar
</script>
<style scoped lang="sass">
.header
  height: 100px
  width: 100%
  background-color: #000
.logo
  height: 100px
  width: 100px
.logo-image
  max-width: 100px
.menu-text
  font-family: 'Cormorant', serif
  font-size: 20px
v-list
  background-color: aqua
.sub-function
  position: absolute
  top: 25%
  font-size: 18px
  right: 7.5%
.divider
  height: 2px
  background-color: white
</style>
