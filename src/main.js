import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from 'firebase';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;


var firebaseConfig = {
  apiKey: "AIzaSyCNwd2vevObfZGIkJ1ItkiipW9Kaf7VtRs",
  authDomain: "fiambreria-9664c.firebaseapp.com",
  projectId: "fiambreria-9664c",
  storageBucket: "fiambreria-9664c.appspot.com",
  messagingSenderId: "909787999231",
  appId: "1:909787999231:web:1c2e542e455055cf6c55ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
