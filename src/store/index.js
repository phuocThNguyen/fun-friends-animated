import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSession: 0
    },
    getters: {
        getCurrentSession: state => state.currentSession,
    },
    mutations: {
        setCurrentSession(state, payload) {
            state.currentSession = payload
        }
    },
    actions: {},
    modules: {},
});