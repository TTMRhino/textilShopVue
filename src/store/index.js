import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import items from './items'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        cart,
        items,
    }
})