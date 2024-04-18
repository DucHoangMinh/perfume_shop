<script setup>
import { RouterView } from 'vue-router'
import {Notifications} from "@kyvg/vue3-notification";
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
