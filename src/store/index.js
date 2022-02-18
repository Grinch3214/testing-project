
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:() => ({
        activeAutor: {},
        posts: [],
        users: null,
        adminInfo: {}
    }),
    getters: {
        statePosts(state) {
            return state.posts
        },
        allAdminInfo(state) {
            return state.adminInfo
        },
    },
    mutations: {
        setAutor(state, payload) {
            state.activeAutor = payload
        },
        setPostState(state, payload) {
            state.posts = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setAdminInfo(state, payload) {
            state.adminInfo = payload
        }
    },
    actions: {
        async getAutor({ commit }) {
            let res = await(await fetch('https://api.github.com/users/Grinch3214')).json()
            commit('setAutor', res)
        },
        async getAdminInfo({ commit }) {
            let res = await(await fetch('http://localhost:3000/adminInfo')).json()
            commit('setAdminInfo', res)
        },
        async getPosts({ commit }) {
            let res = await(await fetch('http://localhost:3000/posts')).json()
            commit('setPostState', res)
        },
        async getUsers({ commit }) {
            let res = await(await fetch('http://localhost:3000/users')).json()
            commit('setUsers', res)
        },
    },
})