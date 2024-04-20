<template lang="pug">
overlay-layer(v-show="value" v-if="value" )
  card-box(
    v-show="value"
    class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
    is-modal
  )
    card-box-component-title(:title="title")
      base-button(
        v-if="hasCancel"
        :icon="mdiClose"
        color="whiteDark"
        small
        rounded-full
        @click="handleCancelAddPerfume"
      )
    .space-y-3
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Tên"
          density="comfortable"
          :disabled="viewOnly"
          :counter="10"
          required
          type="text"
          v-model="perfumeDetail.name"
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-select(
          :items="perfumeBranches"
          variant="outlined"
          label="Thương hiệu"
          hide-details
          :disabled="viewOnly"
          item-title="name"
          v-model="perfumeDetail.branch"
          item-value="id"
          density="comfortable"
        )
      v-col(cols="12").w-full.pa-0
        v-select(
          :items="perfumeFragnants"
          variant="outlined"
          label="Mùi hương"
          v-model="perfumeDetail.fragnant"
          item-title="name_vn"
          item-value="id"
          :disabled="viewOnly"
          density="comfortable"
          hide-details
        )
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Lưu lượng (ml)"
          v-model="perfumeDetail.volume"
          density="comfortable"
          :counter="10"
          required
          type="number"
          :disabled="viewOnly"
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Nồng độ (%)"
          v-model="perfumeDetail.concentration"
          density="comfortable"
          :counter="10"
          required
          :disabled="viewOnly"
          type="number"
          variant="outlined"
        )
      v-col(cols="12").d-flex.align-center.py-0.justify-space-between
        p.mr-2 Giới tính
        div
          form-check-radio.mr-2(
            :model-value="perfumeDetail.gender"
            :input-value="true"
            name="Hehe"
            type="radio"
            label="Nam"
            :disabled="viewOnly"
          )
          form-check-radio(
            :model-value="perfumeDetail.gender"
            :input-value="false"
            name="Hehe"
            type="radio"
            :disabled="viewOnly"
            label="Nữ"
          )
      v-col(cols="12").w-full.pa-0
        v-text-field(
          hide-details
          label="Giá (VND)"
          density="comfortable"
          v-model="perfumeDetail.price"
          :counter="10"
          required
          :disabled="viewOnly"
          type="number"
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-label.mr-2(v-if="!viewOnly") Tải lên ít nhất 3 ảnh sản phẩm
        input(v-if="!viewOnly" id="image-upload" type="file" accept="image/jpeg" @change="handleUploadImage")
        div.image-show-wrapper.d-flex
          div(v-for="(item,index) in imageUploadLinkList").pa-2.position-relative
            img(:src="item" style="width: 200px;")
            base-button(v-if="!viewOnly" :icon="mdiMinus" ).remove-img-button(@click="() => handleRemoveImage(index)" icon="fa-regular fa-circle-xmark")
      v-col(cols="12").w-full.pa-0
        v-textarea(
          hide-details
          label="Mô tả"
          rows="2"
          v-model="perfumeDetail.description"
          density="comfortable"
          :counter="10"
          :disabled="viewOnly"
          required
          variant="outlined"
        )
      v-col(cols="12").w-full.pa-0
        v-textarea(
          hide-details
          label="Lưu ý"
          v-model="perfumeDetail.notes"
          rows="2"
          density="comfortable"
          :disabled="viewOnly"
          :counter="10"
          required
          variant="outlined"
        )
      v-row.w-full.pa-0.d-flex.justify-space-around(v-if="perfumeDetailProp == null")
        .v-col-3.text-center
          v-btn(variant="outlined" color="red" @click="handleCancelAddPerfume").w-100 Hủy
        .v-col-3.text-center
          v-btn(variant="outlined" color="primary" @click="uploadPerfumeDetail").w-100 Thêm
      v-row.w-full.pa-0.d-flex.justify-space-around(v-if="perfumeDetailProp != null")
        .v-col-4.text-center(v-if="!viewOnly")
          v-btn(variant="outlined" color="red" @click="resetChanges").w-100 Hủy các thay đổi
        .v-col-4.text-center(v-if="viewOnly")
          v-btn(variant="outlined" color="primary" @click="viewOnly = false").w-100 Chỉnh sửa
        .v-col-4.text-center(v-if="!viewOnly")
          v-btn(variant="outlined" color="primary" @click="handleSaveChanges").w-100 Lưu thay đổi

</template>
<script setup lang="js">
import {computed, onMounted, ref} from "vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import {mdiClose, mdiMinus} from "@mdi/js";
import {useMainStore} from "@/stores/main";
import BaseIcon from "@/components/BaseIcon.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import firebaseService from "@/services/firebase";
import {api, showNotification} from "@/common";

const store = useMainStore()
const perfumeBranches = computed(() => store.perfumeBranches)
const perfumeFragnants = computed(() => store.perfumeFragnant)

const imageUploadLinkList = ref([])
const imageUpLoadList = ref([])

const originPerfumeDetail = ref({})

const perfumeDetail = ref({
  name: "",
  branch: 1,
  fragnant: 1,
  volume: 0,
  concentration: 0,
  price: 0,
  description: "",
  images: null,
  ingredients: "",
  notes: "",
  gender: true
})

const setPerfumeDetailValue = (pd) => {
  perfumeDetail.value.name = pd.name
  perfumeDetail.value.branch = pd.branch.id || pd.branch
  perfumeDetail.value.fragnant = pd.fragnant.id || pd.fragnant
  perfumeDetail.value.volume = pd.volume
  perfumeDetail.value.concentration = pd.concentration
  perfumeDetail.value.price = pd.price
  perfumeDetail.value.description = pd.description
  perfumeDetail.value.images = pd.images
  perfumeDetail.value.ingredients = pd.ingredients
  perfumeDetail.value.notes = pd.notes
  perfumeDetail.value.gender = pd.gender
}

const handleUploadImage = (e) => {
  let selected = e.target.files[0]
  let objectUrl = URL.createObjectURL(selected)
  imageUploadLinkList.value.push(objectUrl)
  imageUpLoadList.value.push(selected)
}
const handleRemoveImage = (index) => {
  imageUploadLinkList.value.splice(index,1);
  imageUpLoadList.value.splice(index,1);
}
const validateEnoughImage = () => {
  return imageUpLoadList.value.length <= 5
}
const uploadImageToFirebase = async () => {
  if(validateEnoughImage()){
    imageUploadLinkList.value =[]
    for(let i = 0; i < imageUpLoadList.value.length; i++){
      let data = await firebaseService.upload(imageUpLoadList.value[i])
      imageUploadLinkList.value.push(data)
    }
  }
  console.log(imageUploadLinkList.value)
}
const uploadPerfumeDetail = async () => {
  try {
    store.setLoading(true)
    await uploadImageToFirebase()
    perfumeDetail.value.images = imageUploadLinkList.value
    await api.post('/perfume_detail/', perfumeDetail.value)
    store.setLoading(false)
    emit('upload-success')
  } catch (e) {
    store.setLoading(false)
    showNotification.error("Lỗi hệ thống, vui lòng thử lại")
    console.log(e)
  }
}
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  title: {
    type: String,
    required: true
  },
  hasCancel: Boolean,
  perfumeDetailProp: {
    type: Object,
    required: false,
    default: null
  }
})
const emit = defineEmits(['upload-success','update:modelValue', 'confirm', 'cancel-add-perfume'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const viewOnly = ref(false)

const resetChanges = () => {
  setPerfumeDetailValue(props.perfumeDetailProp)
  imageUploadLinkList.value = props.perfumeDetailProp.images
  viewOnly.value = true
}
const handleViewOnlyFirstTime = () => {
  if(props.perfumeDetailProp != null) {
    viewOnly.value = true
    originPerfumeDetail.value = props.perfumeDetailProp
    imageUploadLinkList.value = props.perfumeDetailProp.images
    setPerfumeDetailValue(props.perfumeDetailProp)
    console.log(props.perfumeDetailProp)
  }
}

const handleSaveChanges = () => {
  showNotification.warning("Chức năng chưa hoàn thiện")
}

const handleCancelAddPerfume = () => {
  emit('cancel-add-perfume')
}
onMounted(() => {
  handleViewOnlyFirstTime()
})

</script>
<style lang="sass">
.remove-img-button
  position: absolute
  top: 0px
  right: -4px
  font-size: 24px
  color: white
  font-weight: bold
  background-color: red
  border-radius: 50%
  cursor: pointer
.remove-img-button:hover
  opacity: 0.7
</style>
