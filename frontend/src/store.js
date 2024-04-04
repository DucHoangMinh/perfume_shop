import { createStore} from "vuex";

const store = createStore({
  state() {
    return {
      authenticated: false,
      token: ''
    }
  },
  mutations: {
    setAuthenticated: (state, payload) =>  {
      state.authenticated = payload
    },
    setToken: (state, payload) => {
      state.token = payload
    }
  },
  actions: {
    setToken: (state, payload) => {
      state.token = payload
    }
  }
})
export default store;
