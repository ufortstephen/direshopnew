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
            let response = await axios.get('http://direshop777.herokuapp.com/api/items/');
            console.log(response);
            commit('SET_PRODUCTS', response.data)
        }
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products
        }
    },
    modules: {}
})