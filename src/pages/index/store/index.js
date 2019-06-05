import Vue from 'vue';
import Vuex from 'vuex';
import { cstore } from '@/helper/lakes';

// 站点模块

Vue.use(Vuex);

const state = {
    publicPath: '.',
    breadcrumb: [],
};

const mutations = {
    setState: (states, payload) => cstore.mutations.setState(states, payload),
};
const getters = {};
const actions = {};

// 返回 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});
