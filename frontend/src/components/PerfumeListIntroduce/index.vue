<template lang="pug">
.perfume-list-introduce
  p.perfume-list-name {{perfumeListName}}
  .perfume-list

</template>
<script lang="js">
import {defineComponent} from "vue";

const PerfumeListIntroduce = defineComponent({
  props: {
    perfumeListName: {
      type: String,
      required: true
    }
  },
  setup(){
    return {}
  }
})
export default PerfumeListIntroduce
</script>
<style scoped lang="sass">

</style>
