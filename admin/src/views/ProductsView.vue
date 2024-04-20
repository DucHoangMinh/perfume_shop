<script setup lang="js">
import {mdiViewList} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import PerfumeDetailModel from "@/components/PerfumeDetailModal.vue";
import {ref} from "vue";
import {api, showNotification} from "@/common";
import {useMainStore} from "@/stores/main";
import {mainStore} from "@/main";
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import firebaseService from "@/services/firebase";
const openAddPerfumeModal = ref(false)

const perfumeDetailProp = ref(null)
const currentPerfumeDetail = ref(null)

const uploadSucess = async () => {
  await mainStore.fetchSampleClients()
  openAddPerfumeModal.value = false
  showNotification.success("Thêm thông tin sản phẩm mới thành công!")
}
const openViewProduct = (product) => {
  perfumeDetailProp.value = product
  openAddPerfumeModal.value = true
}

const handleDeleteProduct = async () => {
  try {
    mainStore.setLoading(true)
    await firebaseService.deleteImagesList(currentPerfumeDetail.value.images)
    await api.delete(`/perfume_detail/${currentPerfumeDetail.value.id}`)
    await mainStore.fetchSampleClients()
    mainStore.setLoading(false)
    currentPerfumeDetail.value = null
    showNotification.success("Xóa sản phẩm thành công!")
  }catch (e) {
    showNotification.error("Lỗi hệ thống, vui lòng thử lại!")
  } finally {
    mainStore.setLoading(false)
    showConfirmDialog.value = false
  }
}
const closeViewProduct = (product) => {
  currentPerfumeDetail.value = product
  showConfirmDialog.value = true
}

const showConfirmDialog = ref(false)

</script>

<template>
  <LayoutAuthenticated>
    <PerfumeDetailModel
      v-if="openAddPerfumeModal"
      :title="'Thêm sản phẩm mới'"
      :model-value="openAddPerfumeModal"
      :has-cancel="true"
      :perfume-detail-prop="perfumeDetailProp"
      @upload-success="uploadSucess"
      @cancel-add-perfume="openAddPerfumeModal = false"
    >
    </PerfumeDetailModel>
    <ConfirmDialog
      :message="`Xác nhận xóa sản phẩm ${currentPerfumeDetail?.name}?`"
      :show="showConfirmDialog"
      @on-cancel="showConfirmDialog = false"
      @on-confirm="handleDeleteProduct"
    >

    </ConfirmDialog>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiViewList"
        title="Danh sách sản phẩm"
        @open-modal="() => {openAddPerfumeModal = true; perfumeDetailProp = null}"
        main
      >
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table>
        <TableSampleClients
          checkable
          @open-view="args => openViewProduct(args)"
          @close-view="args => closeViewProduct(args)"
        />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
