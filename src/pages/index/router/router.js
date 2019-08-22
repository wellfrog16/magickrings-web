import Vue from 'vue';
import Router from 'vue-router';
import Frame from '../views/frame/Index.vue';
import Root from '../../../components/Root.vue';
// import { helper } from '@/helper/lakes';

Vue.use(Router);

// 一个空模板，方便子节点使用
// const Root = Vue.component('root', {
//     template: '<router-view></router-view>',
// });

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
    // savedPosition is only available for popstate navigations.
        return savedPosition;
    }
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => !m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
};

// todo 按模块写入单独的文件引用
const router = new Router({
    // mode: 'history',
    scrollBehavior,
    routes: [
        {
            name: '首页',
            path: '',
            component: Frame,
            redirect: { name: '原型首页' },
            children: [
                {
                    name: '原型首页',
                    path: 'home',
                    component: () => import('../views/home/Index.vue'),
                },

                // 产品
                {
                    path: 'product',
                    component: Root,
                    children: [
                        {
                            path: 'category/:id',
                            component: () => import('../views/product/Index.vue'),
                        },
                        {
                            path: 'detail/:id',
                            component: () => import('../views/product/Detail.vue'),
                        },
                        {
                            path: 'search',
                            component: () => import('../views/product/Index.vue'),
                        },
                    ],
                },

                // 课程
                {
                    path: 'course',
                    component: Root,
                    redirect: { path: '/course/student' },
                    children: [
                        {
                            path: 'lingqi',
                            component: () => import('../views/course/Lingqi.vue'),
                        },
                        {
                            path: 'tongling',
                            component: () => import('../views/course/Tongling.vue'),
                        },
                        // {
                        //     path: 'index',
                        //     component: () => import('../views/course/Index.vue'),
                        // },
                        {
                            path: 'student',
                            component: () => import('../views/course/Student.vue'),
                        },
                    ],
                },
                {
                    name: '品牌故事',
                    path: 'story',
                    component: () => import('../views/story/Index.vue'),
                },
                {
                    name: '课程1',
                    path: 'course2',
                    component: () => import('../views/course2/Index.vue'),
                },
                {
                    name: '隐私条款',
                    path: 'clause',
                    component: () => import('../views/clause/Index.vue'),
                },
            ],
        },
    ],
});

export default router;
