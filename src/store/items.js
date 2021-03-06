import Vue from 'vue'

export default {
    state: {
        items: null,
        top: [],
        paginations: {},
        sort: 'item',
        method: '',
        loading: 'false'
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items
            state.paginations = payload._meta //пагинация
            state.paginations.links = payload._links
        },
        setLoading(state, paload) {
            state.loading = paload
        },
        setSort(state, paload) {
            state.sort = paload
        },
    },
    actions: {

        async asyncGetItems(context) {
            let str = `items`

            context.commit('setLoading', true)

            try {
                Vue.resource(str)
                    .get().then(res => res.json()).then(items => {
                        /*items.items.map(item => {
                            //убираем из vendor все  "/"
                            return item.vendor = item.vendor.replace(new RegExp("/", 'g'), "")
                        })*/

                        //помещаем items в store              
                        context.commit('setItems', items)
                        context.commit('setLoading', false)
                    })
            } catch (error) {
                context.commit('setLoading', false)
                throw (error)
            }
        }
    },
    getters: {
        items(state) {
            return state.items
        },
        loading(state) {
            return state.loading
        }

    }
}