import { useNotification} from "@kyvg/vue3-notification";
import axios from "axios";
import Cookies from 'js-cookie'
import store from "@/store";
const notification = useNotification()

const showNotification = {
  error: (message) => {
    notification.notify({
      title: message,
      type: 'error'
    })
  },
  warning: (message) => {
    notification.notify({
      title: message,
      type: 'warn'
    })
  },
  success: (message) => {
    notification.notify({
      title: message,
      type:'success'
    })
  }
}

const cookie = {
  setUser: (user) => {
    Cookies.set('user', JSON.stringify(user), {secure: true})
  },
  getUser: () => {
    return JSON.parse(Cookies.get('user') || '{}')
  }
}

const api = {
  get: async (endpoint) => {
    return await axios.get(`http://127.0.0.1:5000${endpoint}`)
  },
  post: async (endpoint, data) => {
    return await axios.post(`http://127.0.0.1:5000${endpoint}`, data)
  },
  put: async (endpoint, data) => {
    return await axios.put(`http://127.0.0.1:5000${endpoint}`, data)
  }
}

const checkAuthenticated = async () => {
  try {
    const { data } = await api.get('/user/check_authenticated')
    store.commit('setAuthenticated', true)
    return true
  }catch (err) {
    Cookies.remove('user')
    store.commit('setAuthenticated', false)
    return false
  }
}
const handleLogout = async () => {
  try {
    // const { data } = await api.post('/user/logout')
    Cookies.remove('user')
    store.commit('setAuthenticated', false)
  }catch (err) {
    showNotification.error('Có lỗi hệ thống, vui lòng đóng trình duyệt và truy cập lại!')
  }
}

export {
  notification,
  showNotification,
  api,
  cookie,
  checkAuthenticated,
  handleLogout
}
