<template lang="pug">
table
  thead
    tr
      th
      th(v-for="item in headerList") {{item}}
      th
  tbody
    tr(v-for="item in rowsList")
      td.border-b-0
        user-avatar(:username="'no-name'").w-24.h-24.mx-auto
      td(v-for="col in columnValueList") {{item[col]}}
      td.whitespace-nowrap
        base-buttons(type="justify-start lg:justify-end" no-wrap)
          base-button(
            color="info"
            :icon="mdiPencil",
            small
          )
          base-button(
            color="danger"
            :icon="mdiTrashCan"
            small
          )

</template>
<script setup lang="js">
import UserAvatar from "@/components/UserAvatar.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import {mdiPencil, mdiTrashCan} from "@mdi/js";


const props = defineProps({
  headerList: {
    type: Array,
    default: () => [],
    required: true
  },
  rowsList: {
    type: Array,
    default: () => [],
    required: true
  },
  columnValueList: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>
<style scoped lang="sass">

</style>
