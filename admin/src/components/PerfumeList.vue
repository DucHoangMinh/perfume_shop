<script setup>
import SinglePerfume from "@/components/SinglePerfume.vue";

const props = defineProps({
  perfumeList: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>

<template lang="pug">
.d-flex.justify-start.flex-wrap
  div.container(v-for="perfume in perfumeList").mb-2
    single-perfume(
     :perfume-detail="perfume"
    )
</template>

<style scoped lang="sass">
.container
  width: 80%
  max-width: 270px
  min-width: 260px
</style>
