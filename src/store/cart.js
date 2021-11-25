export default {
    state: {
        cart: {
            items: [],
            totalSum: 0,
            totalQuantity: 0
        }
    },


    actions: {
        addToCart(context, payload) {
            //console.log(paload)
            context.commit('setItemToCart', payload)
        },
    },
    mutations: {
        setItemToCart(state, { item, quantity = 1 }) {
            console.log(`item = ${item.item} q = ${quantity}`)
        }
    },
    getters: {}
}