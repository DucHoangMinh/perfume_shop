<template lang="pug">
layout-authenticated
  perfume-branch-model(
    :show="openPerfumeBranchModal"
    :title="'Thông tin nước hoa'"
    @close-modal="openPerfumeBranchModal = false"
    @add-success="handleAddPerfumeSuccess"
  )
  section-main
   section-title-line-with-button(
    :title="'Danh sách thương hiệu nước hoa'"
    :icon="mdiViewList"
    @click="openPerfumeBranchModal = true"
    @open-modal="openPerfumeBranchModal = true"
    main
   )
   card-box(has-table).mb-6
    common-table(
      :rows-list="rowsList"
      :column-value-list="columnValueList"
      :header-list="headersList"
    )
</template>
<script lang="js" setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBox from "@/components/CardBox.vue";
import CommonTable from "@/components/CommonTable.vue";
import { headersList, columnValueList} from "@/views/DatataMaster/Branch";
import {useMainStore} from "@/stores/main";
import {computed, ref} from "vue";
import {mdiViewList} from "@mdi/js";
import PerfumeBranchModel from "@/components/PerfumeBranchModel.vue";
import {showNotification} from "@/common";

const store = useMainStore()
const openPerfumeBranchModal = ref(false)
const rowsList = computed(() => store.perfumeBranches)

const handleAddPerfumeSuccess = async () => {
  store.setLoading(false)
  await store.fetchListBranch()
  openPerfumeBranchModal.value = false
  showNotification.success("Thêm thông tin hãng nước hoa mới thành công!")
}
</script>
<style scoped lang="sass">

</style>
