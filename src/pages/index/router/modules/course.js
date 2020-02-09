import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/course',
    component: Layout,
    redirect: { path: '/course/student' },
    meta: {
        title: '课程',
    },
    children: [
        {
            path: 'student',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/course/Student.vue'),
            meta: {
                title: '学员',
            },
        },
        {
            path: 'lingqi',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/course/Lingqi.vue'),
            meta: {
                title: '灵气课程',
            },
        },
        {
            path: 'tongling',
            component: () => import(/* webpackChunkName: "combine" */'#index/views/course/Tongling.vue'),
            meta: {
                title: '通灵课程',
            },
        },
    ],
};

export default route;
