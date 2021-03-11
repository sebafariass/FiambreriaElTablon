import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    GET_DATA_USERS(state, users){
      state.users = users
    },
  },
  actions: {
    async getDataUsers({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("users")
          .onSnapshot((snapshot) => {
            let users = [];
            snapshot.forEach((p) => {
              users.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_USERS", users);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },
  },
  modules: {}
});
