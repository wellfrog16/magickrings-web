import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    path: '/story',
    component: Layout,
    redirect: { path: '/story/index' },
    meta: {
        title: '品牌故事',
    },
    children: [
        {
            path: 'index',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/story/Index.vue'),
            meta: {
                hidden: true,
                title: '品牌故事',
            },
        },
    ],
};

export default route;
