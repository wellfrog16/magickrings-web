import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/ritual',
    component: Layout,
    redirect: { path: '/ritual/zhuanyun' },
    meta: {
        title: '占卜仪式',
    },
    children: [
        {
            path: 'mofa',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/ritual/Mofa.vue'),
            meta: {
                title: '独家魔法仪式',
            },
        },
        {
            path: 'zhuanyun',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/ritual/Zhuanyun.vue'),
            meta: {
                title: '女巫圣火灵气转运',
            },
        },
        {
            path: 'zhanbu',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/ritual/Zhanbu.vue'),
            meta: {
                title: '通灵星光体占卜',
            },
        },
    ],
};

export default route;
