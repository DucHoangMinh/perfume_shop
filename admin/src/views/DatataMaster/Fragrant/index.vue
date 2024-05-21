<template lang="pug">
layout-authenticated
  perfume-fragrant-modal(
    :show="openFragrantModal"
    :title="'Thông tin mùi hương nước hoa'"
    @close-modal="openFragrantModal = false"
    @save-success="handleSaveSuccess"
  )
  section-main
    section-title-line-with-button(
      :title="'Danh sách mùi hương nước hoa'"
      :icon="mdiViewList"
      @open-modal="openFragrantModal = true"
      main
   )
    card-box(has-table).mb-6
      common-table(
        :rows-list="rowsList"
        :column-value-list="columnValueList"
        :header-list="headersList"
      )

</template>
<script setup lang="js">
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import { computed, onMounted, ref } from 'vue'
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import {mdiViewList} from "@mdi/js";
import {useMainStore} from "@/stores/main";
import CardBox from "@/components/CardBox.vue";
import CommonTable from "@/components/CommonTable.vue";
import {headersList, columnValueList} from "@/views/DatataMaster/Fragrant/index";
import PerfumeFragrantModal from "@/components/PerfumeFragrantModal.vue";
import {showNotification} from "@/common";

const store = useMainStore()
const rowsList = computed(() => store.perfumeFragnant)

const openFragrantModal = ref(false)

const handleSaveSuccess = () => {
  openFragrantModal.value = false
  store.setLoading(false)
  store.fetchListFragnant()
  showNotification.success('Thêm thông tin mùi hương mới thành công')
}
const init = async () => {
  await store.fetchListFragnant()
}
onMounted(init)
</script>
<style scoped lang="sass">

</style>
