import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/product',
    component: Layout,
    redirect: { path: '/home' },
    meta: {
        title: '分类',
    },
    children: [
        {
            path: 'category/:id',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/product/Index.vue'),
            meta: {
                title: '分类',
            },
        },
        {
            path: 'detail/:id',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/product/Detail.vue'),
            meta: {
                title: '产品详细',
            },
        },
        {
            path: 'search',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/product/Index.vue'),
            meta: {
                title: '查询结果',
            },
        },
    ],
};

export default route;
