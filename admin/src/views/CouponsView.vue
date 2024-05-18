<script setup>
import {onMounted, reactive, ref} from 'vue'
import {mdiBallotOutline, mdiAccount, mdiMail, mdiGithub, mdiClose} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import SaleFilter from '@/components/SaleFilter.vue'
import {api, showNotification, timeFunction} from "@/common";
import SinglePerfume from "@/components/SinglePerfume.vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxComponentBody from "@/components/CardBoxComponentBody.vue";
import PerfumeList from "@/components/PerfumeList.vue";
import CardBoxComponentFooter from "@/components/CardBoxComponentFooter.vue";
import {useMainStore} from "@/stores/main";
import CouponModal from "@/components/CouponModal.vue";

const store = useMainStore()

const totalPerfumeList = ref(store.clients)
const showPerfumeListModal = ref(false)
const couponList = ref([])
const currentPerfumeList = ref([])
const selectedPerfumeDetail = ref([])

const getCouponList = async () => {
  try {
    const { data } = await api.get('/coupon/')
    couponList.value = data
  } catch (e) {
    showNotification.error("Lỗi hệ thống, vui lòng thử lại!")
  }
}

const openShowPerfumeListModal = async (ids) => {
  const { data } = await api.get(`/perfume_detail/many?ids=[${ids.toString()}]`)
  currentPerfumeList.value = data
  let currentPerfumeListId = currentPerfumeList.value.map(item => item.id)
  totalPerfumeList.value.forEach(item => {
    item.isCheck = !!currentPerfumeListId.includes(item.id);
  })
  showPerfumeListModal.value = true
}
const changeSelectedList = (selectedPDList) => {
  console.log(selectedPDList)
}
const init = async () => {
  await getCouponList()
}
const showCouponModal = ref(true)
onMounted(init)

</script>

<template>
  <LayoutAuthenticated>
    <CouponModal
      :show="showCouponModal"
      @change-selected-list="changeSelectedList"
      :title="'Thêm mã giảm giá mới'"
      @close-modal="showCouponModal = false"
    ></CouponModal>
    <OverlayLayer v-if="showPerfumeListModal" v-show="showPerfumeListModal">
      <CardBox
        class="shadow-lg max-h-modal lg:w-3/5 xl:w-8/12 z-50"
        is-modal
      >
        <CardBoxComponentTitle title="">
          <BaseButton
            :icon="mdiClose"
            color="whiteDark"
            small
            rounded-full
            @click="showPerfumeListModal = false"
          ></BaseButton>
        </CardBoxComponentTitle>
        <CardBoxComponentBody>
          <PerfumeList :perfume-list="totalPerfumeList">
          </PerfumeList>
        </CardBoxComponentBody>
        <CardBoxComponentFooter class="py-0 text-center">
          <v-btn variant="outlined">Lưu</v-btn>
        </CardBoxComponentFooter>
      </CardBox>
    </OverlayLayer>
    <SectionMain>
      <SectionTitleLineWithButton :have-add-button="false" :icon="mdiBallotOutline" title="Quản lý danh sách ưu đãi" main>
      </SectionTitleLineWithButton>
      <SaleFilter></SaleFilter>
      <CardBox class="mb-2" v-for="coupon in couponList">
        <v-row>
          <v-col>
            <p><span class="font-weight-bold">Tên:</span> {{coupon.name}}</p>
            <p><span class="font-weight-bold">Mã coupon:</span> {{coupon.code}}</p>
            <p><span class="font-weight-bold">Hiệu lực từ</span> {{timeFunction.convertCouponTime(coupon.period_from)}} <span class="font-weight-bold">
              tới</span>  {{timeFunction.convertCouponTime(coupon.period_to)}}</p>
          </v-col>
          <v-col>
            <p><span class="font-weight-bold">Phần trăm giảm giá:</span> {{coupon.percentage}}%</p>
            <p>
              <span class="font-weight-bold">Danh sách sản phẩm áp dụng:</span>
              &nbsp;
              <span style="color: #0d47a1; text-decoration: underline;
              cursor: pointer" @click="() => openShowPerfumeListModal(coupon.list_product_id)">bấm để xem</span>
            </p>
          </v-col>
        </v-row>
      </CardBox>
    </SectionMain>
<!--    <SectionMain>-->
<!--      <CardBox>-->
<!--        <FormField label="Checkbox">-->
<!--          <FormCheckRadioGroup-->
<!--            v-model="customElementsForm.checkbox"-->
<!--            name="sample-checkbox"-->
<!--            :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }"-->
<!--          />-->
<!--        </FormField>-->

<!--        <BaseDivider />-->

<!--        <FormField label="Radio">-->
<!--          <FormCheckRadioGroup-->
<!--            v-model="customElementsForm.radio"-->
<!--            name="sample-radio"-->
<!--            type="radio"-->
<!--            :options="{ one: 'One', two: 'Two' }"-->
<!--          />-->
<!--        </FormField>-->

<!--        <BaseDivider />-->

<!--        <FormField label="Switch">-->
<!--          <FormCheckRadioGroup-->
<!--            v-model="customElementsForm.switch"-->
<!--            name="sample-switch"-->
<!--            type="switch"-->
<!--            :options="{ one: 'One', two: 'Two' }"-->
<!--          />-->
<!--        </FormField>-->

<!--        <BaseDivider />-->

<!--        <FormFilePicker v-model="customElementsForm.file" label="Upload" />-->
<!--      </CardBox>-->

<!--      <SectionTitle>Form with status example</SectionTitle>-->

<!--      <CardBox-->
<!--        class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"-->
<!--        is-form-->
<!--        is-hoverable-->
<!--        @submit.prevent="formStatusSubmit"-->
<!--      >-->
<!--        <NotificationBarInCard-->
<!--          :color="formStatusOptions[formStatusCurrent]"-->
<!--          :is-placed-with-header="formStatusWithHeader"-->
<!--        >-->
<!--          <span-->
<!--            ><b class="capitalize">{{ formStatusOptions[formStatusCurrent] }}</b> state</span-->
<!--          >-->
<!--        </NotificationBarInCard>-->
<!--        <FormField label="Fields">-->
<!--          <FormControl-->
<!--            v-model="form.name"-->
<!--            :icon-left="mdiAccount"-->
<!--            help="Your full name"-->
<!--            placeholder="Name"-->
<!--          />-->
<!--        </FormField>-->

<!--        <template #footer>-->
<!--          <BaseButton label="Trigger" type="submit" color="info" />-->
<!--        </template>-->
<!--      </CardBox>-->
<!--    </SectionMain>-->
  </LayoutAuthenticated>
</template>
