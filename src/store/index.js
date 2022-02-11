
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:() => ({
        activeUser: {},
        posts: [],
    }),
    getters: {
        statePosts(state) {
            return state.posts
        }
        // activePost(state) {
        //     return state.posts.find(post => post.id === state.activePostId)
        // }
    },
    mutations: {
        setUser(state, payload) {
            state.activeUser = payload
        },
        setPostState(state, payload) {
            state.posts = payload
        },
    },
    actions: {
        async getAutor({ commit }) {
            let response = await(await fetch('https://api.github.com/users/Grinch3214')).json()
            commit('setUser', response)
        },
        async getPosts({ commit }) {
            let res = await(await fetch('http://localhost:3000/posts')).json()
            commit('setPostState', res)
        }
    },
})