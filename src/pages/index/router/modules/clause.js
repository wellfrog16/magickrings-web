import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/clause',
    component: Layout,
    redirect: { path: '/clause/index' },
    meta: {
        title: '隐私条款',
    },
    children: [
        {
            path: 'index',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/clause/Index.vue'),
            meta: {
                hidden: true,
                title: '隐私条款',
            },
        },
    ],
};

export default route;
