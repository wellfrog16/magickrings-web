import Vue from 'vue';
import Vuex from 'vuex';

// 站点模块
import site from '@/store/module/site';

Vue.use(Vuex);

const state = {
    publicPath: process.env.BASE_URL,
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
    modules: {
        site,
    },
});
