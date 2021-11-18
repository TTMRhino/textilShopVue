import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Vuelidate)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')