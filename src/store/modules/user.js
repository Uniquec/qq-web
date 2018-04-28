import axios from 'axios'
import { hostip } from '@/config.js'

const state = {
  login_name: '',
  login_pwd: '',
  login_token: ''
}

const getters = {
  currentUser: state => {
    return {
      name: state.login_name,
      token: state.login_token
    }
  }
}

const mutations = {
  getLocalUser(state) {
    state.login_name = localStorage.getItem('name')
    state.login_token = localStorage.getItem('token')
  },
  setUser(state, payload) {
    state.login_name = payload.name
    state.login_token = payload.token
  },
  logout(state) {
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    state.login_name = ''
    state.login_token = ''
  }
}

const actions = {
  login({ commit }, payload) {
    console.log(payload)
    return axios
      .post(hostip + '/iv1/user/login', {
        name: payload.name,
        pwd: payload.pwd
      })
      .then(res => res.data.returnValue)
      .then(value => {
        console.log(value)
        localStorage.setItem('name', value.name)
        localStorage.setItem('token', value.token)
        commit({
          type: 'setUser',
          name: value.name,
          token: value.token
        })
      })
  },
  register({ commit }, payload) {
    return axios
      .post(hostip + '/iv1/user/register', {
        name: payload.name,
        pwd: payload.pwd
      })
      .then(res => {
        console.log(res)
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('token', res.data.token)

        commit({
          type: 'setUser',
          name: res.data.name,
          token: res.data.token
        })
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
