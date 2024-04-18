<script setup>
import OverlayLayer from "@/components/OverlayLayer.vue";
import {computed} from "vue";
import {useMainStore} from "@/stores/main";

const store = useMainStore()
const isLoading = computed(() => store.isLoading)
</script>

<template lang="pug">
overlay-layer(v-show="isLoading")
  v-progress-circular(
    :size="50"
    :width="5"
    indeterminate
    color="primary"
  )
</template>

<style scoped lang="sass">

</style>
