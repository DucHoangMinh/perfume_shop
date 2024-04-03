<template>
  <v-app>
    <v-main>
      <header-bar></header-bar>
      <router-view />
      <notifications duration="5" class="ma-2">
        <template #body="props">
          <div class="my-notification d-flex align-center justify-lg-space-between" :style="{'background-color': handleStyle(props.item)}">
            <p class="notification-title py-3 pl-2 text-white">
              {{ props.item.title }}
            </p>
            <button class="mr-2 notification-close d-flex align-center" @click="props.close">
              <v-icon class="notification-close-icon" icon="mdi-close"></v-icon>
            </button>
          </div>
        </template>
      </notifications>
    </v-main>
  </v-app>
</template>

<script lang="js">
import HeaderBar from "@/components/Header.vue"
import {defineComponent, onMounted} from "vue";
import {Notifications} from "@kyvg/vue3-notification";
import {checkAuthenticated, handleLogout} from "@/common";
const App = defineComponent({
  components: {
    Notifications,
    HeaderBar
  },
  setup(){
    const handleStyle = (props) => {
      if(props.type === "error"){
        return "#e14d45"
      }
      if(props.type === "warn"){
        return "#ed991d"
      }
      if(props.type === "success"){
        return "#2ecc71"
      }
    }
    const handleCheckAuthenticated = async () => {
      let result = await checkAuthenticated()
      console.log(result)
      if(!result){
        await handleLogout()
      }
    }
    onMounted(async () => {
      await handleCheckAuthenticated()
    })
    return {
      handleStyle
    }
  }
})
export default App
</script>
<style scoped lang="sass">
.my-notification
  border-radius: 4px
  font-weight: 300 !important
.notification-close
  display: block
  width: 20px
  height: 20px
.notification-close-icon
  color: white
  font-weight: 600
::v-deep .vue-notification-wrapper
  margin-top: 8px
</style>
