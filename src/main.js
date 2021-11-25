import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource);
Vue.http.options.root = 'http://textileshop/api/'
Vue.use(Vuelidate)

new Vue({
    render: h => h(App),
    router,
    store,
    VueResource
}).$mount('#app')