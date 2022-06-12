import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  // saveAuthToCookie,
  // saveUserToCookie,
} from "@/utils/cookies";
// import { loginUser } from "@/api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userEmail: getUserFromCookie() || "",
    userID: "",
    token: getAuthFromCookie() || "",
  },
  // computed와 유사
  getters: {
    isLogin(state) {
      return state.userEmail !== "";
    },
  },
  // state를 바꿈
  mutations: {
    setUserEmail(state, userEmail) {
      state.userEmail = userEmail;
    },
    setUserID(state, userID) {
      state.userID = userID;
    },
    clearUserEmail(state) {
      state.userEmail = "";
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    // async LOGIN({ commit }, userData) {
    //   const { data } = await loginUser(userData);
    //   // console.log(data.token);
    //   // commit("setToken", data.token);
    //   commit("setUserEmail", data.userData.email);
    //   // saveAuthToCookie(data.token);
    //   saveUserToCookie(data.userData.email);
    //   return data;
    // },
  },
});
