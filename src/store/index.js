// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 4,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
});