import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    _defaultView: '',       //默认地图view
    _defaultMapTreeVisible: false,
};

const getters = {

    _getDefaultView() {
        return state._defaultView;
    },
    _getDefaultMapTreeVisible() {
        return state._defaultMapTreeVisible;
    }
};

const mutations = {

    _setDefaultView(state, value) {
        state._defaultView = value;
    },
    _setDefaultMapTreeVisible(state, value) {
        state._defaultMapTreeVisible = value;
    }
};


const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;