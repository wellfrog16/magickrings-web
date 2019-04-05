import Vue from 'vue';
import Vuex from 'vuex';

// 站点模块

Vue.use(Vuex);

const state = {
    publicPath: '.',
};

const mutations = {};
const getters = {};
const actions = {};

// 返回 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});
