import {useMainStore} from "@/stores/main";
const store = useMainStore()
const rowsList = store.perfumeBranches
const headersList = [
  'Tên',
  'Quốc gia xuất xứ',
  'Năm thành lập',
  'Website',
  'Email'
]
const columnValueList = [
  'name',
  'country_of_origin',
  'founded_year',
  'website',
  'email'
]
export {
  rowsList,
  headersList,
  columnValueList
}
