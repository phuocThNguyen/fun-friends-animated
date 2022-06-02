import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSession: 0,
        loading: true,
        authed: false,
    },
    getters: {
        getCurrentSession: state => state.currentSession,
        getLoadingStatus: state => state.loading,
        getAuthedStatus: state => state.authed,
    },
    mutations: {
        setCurrentSession(state, payload) {
            state.currentSession = payload;
        },
        setLoadingStatus(state, payload) {
            state.loading = payload;
        },
        setAuthedStatus(state, payload) {
            state.authed = payload;
        }
    },
    actions: {},
    modules: {},
});