<template lang="pug">
.perfume-list-introduce
  p.perfume-list-name.text-h5.text-center.ma-3 {{perfumeListName}}
  v-row
    v-col(cols="3").perfume-list(v-for="pd in perfumeList")
      PerfumeListIntroduceItem(
        :perfume-detail="pd"
      )

</template>
<script lang="js">
import {defineComponent} from "vue";
import PerfumeListIntroduceItem from "@/components/PerfumeListIntroduce/PerfumeListIntroduceItem.vue";

const PerfumeListIntroduce = defineComponent({
  components: {PerfumeListIntroduceItem},
  props: {
    perfumeListName: {
      type: String,
      required: true
    },
    perfumeList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(){
    return {}
  }
})
export default PerfumeListIntroduce
</script>
<style scoped lang="sass">
.perfume-list-name
  font-family: 'Lexend', sans-serif
  color: #5c5c5c
  line-height: 1.1
</style>
