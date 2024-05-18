<script setup>
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import {mdiClose} from "@mdi/js";
import CardBoxComponentBody from "@/components/CardBoxComponentBody.vue";
import PerfumeList from "@/components/PerfumeList.vue";
import {useMainStore} from "@/stores/main";
import {ref} from "vue";

const props = defineProps({
  show : {
    type: Boolean,
    required: true,
    default: false
  }
})
const emit = defineEmits(['close-modal', 'change-selected-list'])
const store = useMainStore()
const totalPerfumeList = ref(store.clients)
const clickCheckBox = (pd_list) => {
  const selectedPD = pd_list.filter(item => item.isCheck)
  emit('change-selected-list', selectedPD)
}
</script>

<template lang="pug">
overlay-layer(
  v-if="show" v-show="show"
)
  card-box(
    class="shadow-lg max-h-modal lg:w-3/5 xl:w-8/12 z-50"
    is-modal
  )
    card-box-component-title(
      title="Danh sách sản phẩm nước hoa"
    )
      base-button(
        :icon="mdiClose"
        color="whiteDark"
        small
        rounded-full
        @click="emit('close-modal')"
      )
    card-box-component-body
      perfume-list(
        :perfume-list="totalPerfumeList"
        @click-checkbox="clickCheckBox"
      )
</template>

<style scoped lang="sass">

</style>
