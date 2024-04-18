<script setup>
import {mdiViewList} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import PerfumeDetailModel from "@/components/PerfumeDetailModel.vue";
import {ref} from "vue";
import {showNotification} from "@/common";
import {useMainStore} from "@/stores/main";
import {mainStore} from "@/main";
const openAddPerfumeModal = ref(false)

const uploadSucess = async () => {
  await mainStore.fetchSampleClients()
  openAddPerfumeModal.value = false
  showNotification.success("Thêm thông tin sản phẩm mới thành công!")
}

</script>

<template>
  <LayoutAuthenticated>
    <PerfumeDetailModel
      :title="'Thêm sản phẩm mới'"
      :model-value="openAddPerfumeModal"
      :has-cancel="true"
      @upload-success="uploadSucess"
      @cancel-add-perfume="openAddPerfumeModal = false"
    >
    </PerfumeDetailModel>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiViewList"
        title="Danh sách sản phẩm"
        @open-modal="openAddPerfumeModal = true"
        main>
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table>
        <TableSampleClients checkable />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
