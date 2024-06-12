<template lang="pug">
.perfume-list-introduce
  p.perfume-list-name.text-center.ma-3 {{perfumeListName}}
  .select-filter.text-center.mb-4(v-if="selectFilterList.length > 0")
    v-tabs(
      bg-color="gray"
      v-model="currentFilterTab"
      align-tabs="center"
    )
      v-tab(
        v-for="select in selectFilterList"
        :value="select.id"
      ) {{select.name_vn}}
  v-row.on-a-row
    v-col(cols="3").perfume-list(v-for="pd in perfumeList")
      PerfumeListIntroduceItem(
        :perfume-detail="pd"
        :is-sale="isSale"
      )

</template>
<script lang="js">
import {defineComponent, ref, watch, defineEmits, getCurrentInstance} from "vue";
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
    },
    selectFilterList: {
      type: Array,
      required: false,
      default: () => []
    },
    isSale: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(){
    const currentFilterTab = ref(1)
    const { emit } = getCurrentInstance()
    watch(
      () => currentFilterTab.value,
      () => {
        emit('change-tab', currentFilterTab.value)
      }
    )
    return {
      currentFilterTab
    }
  }
})
export default PerfumeListIntroduce
</script>
<style scoped lang="sass">
.perfume-list-name
  font-family: 'Lexend', sans-serif
  color: #5c5c5c
  line-height: 1.1
  font-size: 22px
  text-transform: uppercase
.on-a-row
  flex-wrap: nowrap
  overflow-x: scroll
</style>
