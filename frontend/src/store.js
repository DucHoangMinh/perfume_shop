import { createStore} from "vuex";

const store = createStore({
  state() {
    return {
      authenticated: false
    }
  },
  mutations: {
    setAuthenticated(state, payload) {
      state.authenticated = payload
    }
  }
})
export default store;
