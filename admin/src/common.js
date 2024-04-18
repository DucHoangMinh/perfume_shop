import axios from "axios";
import Cookies from 'js-cookie'
const cookie = {
  setUser: (user) => {
    Cookies.set('user', JSON.stringify(user), {secure: true})
  },
  getUser: () => {
    return JSON.parse(Cookies.get('user') || null)
  },
  setToken: (token) => {
    Cookies.set('token', JSON.stringify(token), {secure: true})
  },
  getToken: () => {
    return JSON.parse(Cookies.get('token') || null)
  }
}
axios.defaults.headers.common['token'] = cookie.getToken()
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

import { useNotification} from "@kyvg/vue3-notification";
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

export {
  api,
  showNotification
}
