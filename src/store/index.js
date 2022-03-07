import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    async init({commit}){
      console.log("1");
      const res = await axios.get("https://vue-lessons-api.herokuapp.com/photo/list");
      commit('init', res.data);
      console.log("2");
      return res.data;
    },
    loadState({commit}, bool){
      commit("loadState", bool);
    }
  },
  mutations: {
    init(state, payload){
      state.photoArr = payload;
    },
    loadState(state, bool){
      state.isLoad = bool;
    }
  },
  getters: {
    isLoad({ isLoad }) {
      return isLoad;
    },
    photoArr({ photoArr }) {
      return photoArr;
    },
    idx({ idx }) {
      return idx;
    },
  },
});
