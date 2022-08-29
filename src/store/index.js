import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: null,
  token: null,
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }

}
export default new Vuex.Store({
  state,
  mutations,
})