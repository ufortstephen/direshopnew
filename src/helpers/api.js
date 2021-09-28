import axios from "axios";
// import store from '../store.js'

const baseUrl = "https://direshop777.herokuapp.com/api/"

// const token = store.getters.isLoggedIn


export default {
    // Login
    async login(credentails) {
        return axios.post(baseUrl + 'login', credentails)
            .then(response => response.data)
    },

    // Load Beauty Store Products

    async beautyStoreProducts() {
        return axios.get(baseUrl + 'beautystore')
            .then(response => response.data)
    },


    // Load Machine Products

    async machineStoreProducts() {
        return axios.get(baseUrl + 'machinestore')
            .then(response => response.data)
    },
    // Load Fashion Products

    async fashionStoreProducts() {
        return axios.get(baseUrl + 'fashionstore')
            .then(response => response.data)
    },


    // Post Machine Products

    async postMachineProducts(product_details) {
        return axios.post(baseUrl + 'fashionstore', product_details)
            .then(response => response.data)
    },
}