import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data.js'
import router from './router'

let data = {
  books: mock,
  userName: 'Login',
  userList: 'My',
  myList: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
