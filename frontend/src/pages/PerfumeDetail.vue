<script setup lang="js">
import {useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute()
const pdId = computed(() => {
  return route.query.id
})
</script>

<template lang="pug">
p {{pdId}}
</template>

<style scoped lang="sass">

</style>
