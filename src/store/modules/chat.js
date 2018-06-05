import axios from 'axios'
import {hostip} from '@/config.js'
import _ from 'lodash';

const state = {
  inputedMsg: '',
  currentTalker: {
    id: '',
    name: '',
    img: ''
  },
  allChats: [
    {
      talkerId: '1',
      talkerName: '',
      talkerImg:'',
      chats: [
        {
          isMine: true,
          time: '2018-05-27 12:36:18.123',
          msg: 'aaa'
        },
        {
          isMine: false,
          time: '2018-05-27 12:36:20.456',
          msg: 'bbb'
        }]
    },
    {
      talkerId: '2',
      talkerName: '',
      talkerImg:'',
      chats: [
        {
          isMine: true,
          time: '',
          msg: ''
        },
        {
          isMine: false,
          time: '',
          msg: ''
        }]
    }]
};

const getters = {
  chats(state){
    let talk = state.allChats.filter(chat => chat.talkerId === state.currentTalker.id)[0];
    return _.orderBy(talk.chats, 'time');
  },
  listChat(state){
    let listtalk = [];
    for (let talker of state.allChats){
      let t = {};
      t.name = talker.talkerName;
      t.img = talker.talkerImg;
      t.time = talker.chats.time;
      t.msg = talker.chats.msg;
      for(let chat of talker.chats){
        if (chat.time > t.time){
          t.time = chat.time;
          t.msg = chat.msg;
        }
      }
    }
  }
};

const mutations = {
  setInputedMsg(state, payload) {
    state.inputedMsg = payload.msg;
  },
  setCurrentTalker(state, payload) {
    state.currentTalker.id = payload.talkerId;
    state.currentTalker.name = payload.talkerName;
    state.currentTalker.img = payload.talkerImg;
  },
  setAllChats(state, payload) {
    state.allChats = payload.allChats;
  }
};

const actions = {
  getAllChats({ commit,rootState }) {
    console.log(payload);
    return axios
      .post(hostip + '/iv1/chat/message', {
        uid: rootState.state.user.uid
      })
      .then(res => res.data.returnValue)
      .then(value => {
        console.log(value);
        commit({
          type: 'setAllChats',
          allChats: value.allChats,
        })
      })
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
