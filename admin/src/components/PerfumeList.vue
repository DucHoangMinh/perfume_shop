<script setup>
import SinglePerfume from "@/components/SinglePerfume.vue";
import {toRefs} from "vue";

const emit = defineEmits(['click-checkbox'])
const props = defineProps({
  perfumeList: {
    type: Array,
    default: () => [],
    required: true
  }
})
const { perfumeList } = toRefs(props)
const handleClickCheckbox  = (pd) => {
  console.log(pd.isCheck)
  perfumeList.value.forEach((item, index) => {
    if(item.id === pd.id) perfumeList.value[index].isCheck = pd.isCheck
  })
  emit("click-checkbox", perfumeList.value)
}
</script>

<template lang="pug">
.d-flex.justify-start.flex-wrap
  div.container(v-for="perfume in perfumeList").mb-2
    single-perfume(
     :perfume-detail="perfume"
     @click-checkbox="handleClickCheckbox"
    )
</template>

<style scoped lang="sass">
.container
  width: 80%
  max-width: 270px
  min-width: 260px
</style>
