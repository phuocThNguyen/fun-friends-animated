import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSession: 0,
        loading: true,
        authed: false,
        page17data: null,
        page21data: null,
        page22data: null,
        page31data: null,
        page38data: null,
        page63data: null,
        page70data: null,
        page83data: null,
        page97data: null,
        page167data: null,
        page181data: null,
        page184data: null,
        page197data: null,
        page200data: null,
        page221array: [false,false,false,false],
        page222array: [false,false,false,false],
        page223array: [false,false,false,false],
    },
    getters: {
        getCurrentSession: state => state.currentSession,
        getLoadingStatus: state => state.loading,
        getAuthedStatus: state => state.authed,
        getPage17Data: state => state.page17data,
        getPage21Data: state => state.page21data,
        getPage22Data: state => state.page22data,
        getPage31Data: state => state.page31data,
        getPage38Data: state => state.page38data,
        getPage63Data: state => state.page63data,
        getPage70Data: state => state.page70data,
        getPage83Data: state => state.page83data,
        getPage97Data: state => state.page97data,
        getPage167Data: state => state.page167data,
        getPage181Data: state => state.page181data,
        getPage184Data: state => state.page184data,
        getPage197Data: state => state.page197data,
        getPage200Data: state => state.page200data,
        getPage221Array: state => state.page221array,
        getPage222Array: state => state.page222array,
        getPage223Array: state => state.page223array,
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
        },
        setPage17Data(state, payload) {
            state.page17data = payload;
        },
        setPage21Data(state, payload) {
            state.page21data = payload;
        },
        setPage22Data(state, payload) {
            state.page22data = payload;
        },
        setPage31Data(state, payload) {
            state.page31data = payload;
        },
        setPage38Data(state, payload) {
            state.page38data = payload;
        },
        setPage63Data(state, payload) {
            state.page63data = payload;
        },
        setPage70Data(state, payload) {
            state.page70data = payload;
        },
        setPage83Data(state, payload) {
            state.page83data = payload;
        },
        setPage97Data(state, payload) {
            state.page97data = payload;
        },
        setPage167Data(state, payload) {
            state.page167data = payload;
        },
        setPage181Data(state, payload) {
            state.page181data = payload;
        },
        setPage184Data(state, payload) {
            state.page184data = payload;
        },
        setPage197Data(state, payload) {
            state.page197data = payload;
        },
        setPage200Data(state, payload) {
            state.page200data = payload;
        },
        setPage221Array(state, payload) {
            state.page221array = payload
        },
        setPage222Array(state, payload) {
            state.page222array = payload
        },
        setPage223Array(state, payload) {
            state.page223array = payload
        },
    },
    actions: {},
    modules: {},
});