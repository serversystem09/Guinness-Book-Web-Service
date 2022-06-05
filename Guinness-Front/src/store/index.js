import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
  },
  // computed와 유사
  getters: {
    isLogin(state) {
      return state.userId !== "";
    },
  },
  // state를 바꿈
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    clearUserId(state) {
      state.userId = "";
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit("setToken", data.token);
      commit("setUsername", data.user.userId);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.userId);
      return data;
    },
  },
});
