import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import stores from "./store/store"

new Vue({
  el: '#app',
  store:stores,
  render: h => h(App)
})
