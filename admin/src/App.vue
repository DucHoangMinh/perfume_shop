<script setup>
import { RouterView } from 'vue-router'
import {Notifications} from "@kyvg/vue3-notification";
import CommonLoader from "@/components/CommonLoader.vue";
import { onMounted } from 'vue';
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
onMounted(() => {
  console.log("Hehehe")
})
</script>

<template>
  <RouterView />
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
  <CommonLoader></CommonLoader>
</template>
<style lang="sass">
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
