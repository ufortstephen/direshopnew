import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: []
    },

    actions: {
        async getProducts({ commit }) {
            let response = await axios.get('http://direshop.herokuapp.com/api/products/');
            console.log(response);
            commit('SET_PRODUCTS', response.data)
        },
        async getProductById({ commit }, id) {
            let response = await axios.get('http://direshop.herokuapp.com/api/products/');
            console.log(response);
            commit('PRODUCT_ID', response.data)
        }
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products
        },
        GET_PRODUCT: (state, products) => {}
    },
    modules: {}
})