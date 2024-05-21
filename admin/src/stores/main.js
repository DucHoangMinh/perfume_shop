import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import {api} from "@/common";

export const useMainStore = defineStore('main', () => {
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const history = ref([])
  const perfumeBranches = ref([])
  const perfumeFragnant = ref([])
  const isLoading = ref(false)
  const countryAndCapital = ref([])
  const countryNameList = ref([])

  const accountData = ref({
    token: "",
    infor: {}
  })

  async function setAccountData(data) {
    accountData.value.token = data.token
    accountData.value.infor = data.user
  }

  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

   async function fetchSampleClients() {
    const { data } = await api.get('/perfume_detail/all')
    clients.value = data
  }

  async function fetchListBranch(){
    const { data } = await api.get('/perfume_branch/')
    perfumeBranches.value = data
  }

  async function fetchListFragnant(){
    const { data } = await api.get('/perfume_fragnant/')
    perfumeFragnant.value = data
  }

  async function fetchCountryAndCapital(){
    const { data } = await axios.get('https://countriesnow.space/api/v0.1/countries/capital')
    countryAndCapital.value = data
    countryNameList.value = data.data.map(item => item.name)
  }

  function fetchSampleHistory() {
    axios
      .get(`data-sources/history.json`)
      .then((result) => {
        history.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function setLoading(value){
    isLoading.value = value
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    history,
    setUser,
    fetchSampleClients,
    fetchSampleHistory,
    perfumeBranches,
    fetchListBranch,
    perfumeFragnant,
    fetchListFragnant,
    isLoading,
    setLoading,
    countryNameList,
    countryAndCapital,
    fetchCountryAndCapital,
    accountData,
    setAccountData
  }
})
