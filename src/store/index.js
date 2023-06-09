import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSession: 0,
        loading: true,
        authed: false,
        page17data: null,
        page19_1data: [],
        page19_2data: [],
        page19_3data: [],
        page19_4data: [],
        page21data: null,
        page22data: null,
        page26data: [],
        page29data: [],
        page30data: [],
        page31data: null,
        page34data: [],
        page35data: [],
        page35_1data: [],
        page35_2data: [],
        page35_3data: [],
        page36data: [],
        page37data: [],
        page38data: null,
        page40data: null,
        page41data: [],
        page42data: [],
        page43data: [],
        page44data: [],
        page45data: [],
        page63data: null,
        page70data: null,
        page83data: null,
        page85data: [],
        page88data: [],
        page97data: null,
        page167data: null,
        page168data: [],
        page169data: [],
        page181data: null,
        page184data: null,
        page187data: [],
        page192data: null,
        page197data: null,
        page200data: null,
        page207data: [],
        page211data: [],
        page219data: [],
        page220data: [],
        page224data: [],
        page221array: [false,false,false,false],
        page222array: [false,false,false,false],
        page223array: [false,false,false,false],
    },
    getters: {
        getCurrentSession: state => state.currentSession,
        getLoadingStatus: state => state.loading,
        getAuthedStatus: state => state.authed,
        getPage17Data: state => state.page17data,
        getPage19_1Data: state => state.page19_1data,
        getPage19_2Data: state => state.page19_2data,
        getPage19_3Data: state => state.page19_3data,
        getPage19_4Data: state => state.page19_4data,
        getPage21Data: state => state.page21data,
        getPage22Data: state => state.page22data,
        getPage26Data: state => state.page26data,
        getPage29Data: state => state.page29data,
        getPage30Data: state => state.page30data,
        getPage31Data: state => state.page31data,
        getPage34Data: state => state.page34data,
        getPage35Data: state => state.page35data,
        getPage35_1Data: state => state.page35_1data,
        getPage35_2Data: state => state.page35_2data,
        getPage35_3Data: state => state.page35_3data,
        getPage36Data: state => state.page36data,
        getPage37Data: state => state.page37data,
        getPage38Data: state => state.page38data,
        getPage40Data: state => state.page40data,
        getPage41Data: state => state.page41data,
        getPage42Data: state => state.page42data,
        getPage43Data: state => state.page43data,
        getPage44Data: state => state.page44data,
        getPage45Data: state => state.page45data,
        getPage63Data: state => state.page63data,
        getPage70Data: state => state.page70data,
        getPage83Data: state => state.page83data,
        getPage85Data: state => state.page85data,
        getPage88Data: state => state.page88data,
        getPage97Data: state => state.page97data,
        getPage167Data: state => state.page167data,
        getPage168Data: state => state.page168data,
        getPage169Data: state => state.page169data,
        getPage181Data: state => state.page181data,
        getPage184Data: state => state.page184data,
        getPage187Data: state => state.page187data,
        getPage192Data: state => state.page192data,
        getPage197Data: state => state.page197data,
        getPage200Data: state => state.page200data,
        getPage207Data: state => state.page207data,
        getPage211Data: state => state.page211data,
        getPage219Data: state => state.page219data,
        getPage220Data: state => state.page220data,
        getPage221Array: state => state.page221array,
        getPage222Array: state => state.page222array,
        getPage223Array: state => state.page223array,
        getPage224Data: state => state.page224data,
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
        setPage19_1Data(state, payload) {
            state.page19_1data = payload;
        },
        setPage19_2Data(state, payload) {
            state.page19_2data = payload;
        },
        setPage19_3Data(state, payload) {
            state.page19_3data = payload;
        },
        setPage19_4Data(state, payload) {
            state.page19_4data = payload;
        },
        setPage21Data(state, payload) {
            state.page21data = payload;
        },
        setPage22Data(state, payload) {
            state.page22data = payload;
        },
        setPage26Data(state, payload) {
            state.page26data = payload;
        },
        setPage29Data(state, payload) {
            state.page29data = payload;
        },
        setPage30Data(state, payload) {
            state.page30data = payload;
        },
        setPage31Data(state, payload) {
            state.page31data = payload;
        },
        setPage34Data(state, payload) {
            state.page34data = payload;
        },
        setPage35Data(state, payload) {
            state.page35data = payload;
        },
        setPage35_1Data(state, payload) {
            state.page35_1data = payload;
        },
        setPage35_2Data(state, payload) {
            state.page35_2data = payload;
        },
        setPage35_3Data(state, payload) {
            state.page35_3data = payload;
        },
        setPage36Data(state, payload) {
            state.page36data = payload;
        },
        setPage37Data(state, payload) {
            state.page37data = payload;
        },
        setPage38Data(state, payload) {
            state.page38data = payload;
        },
        setPage40Data(state, payload) {
            state.page40data = payload;
        },
        setPage41Data(state, payload) {
            state.page41data = payload;
        },
        setPage42Data(state, payload) {
            state.page42data = payload;
        },
        setPage43Data(state, payload) {
            state.page43data = payload;
        },
        setPage44Data(state, payload) {
            state.page44data = payload;
        },
        setPage45Data(state, payload) {
            state.page45data = payload;
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
        setPage85Data(state, payload) {
            state.page85data = payload;
        },
        setPage88Data(state, payload) {
            state.page88data = payload;
        },
        setPage97Data(state, payload) {
            state.page97data = payload;
        },
        setPage167Data(state, payload) {
            state.page167data = payload;
        },
        setPage168Data(state, payload) {
            state.page168data = payload;
        },
        setPage169Data(state, payload) {
            state.page169data = payload;
        },
        setPage181Data(state, payload) {
            state.page181data = payload;
        },
        setPage184Data(state, payload) {
            state.page184data = payload;
        },
        setPage187Data(state, payload) {
            state.page187data = payload;
        },
        setPage192Data(state, payload) {
            state.page192data = payload;
        },
        setPage197Data(state, payload) {
            state.page197data = payload;
        },
        setPage200Data(state, payload) {
            state.page200data = payload;
        },
        setPage207Data(state, payload) {
            state.page207data = payload;
        },
        setPage211Data(state, payload) {
            state.page211data = payload;
        },
        setPage219Data(state, payload) {
            state.page219data = payload;
        },
        setPage220Data(state, payload) {
            state.page220data = payload;
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
        setPage224Data(state, payload) {
            state.page224data = payload
        },
    },
    actions: {},
    modules: {},
});