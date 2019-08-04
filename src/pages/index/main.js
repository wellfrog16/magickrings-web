import Vue from 'vue';
// import ElementUI from 'element-ui';
import {
    Icon, Row, Col, Breadcrumb, BreadcrumbItem, Tabs, TabPane, Tooltip, Form, FormItem, Input,
    Select, Option, DatePicker, Button, Image,
} from 'element-ui';
import InfiniteLoading from 'vue-infinite-loading'; // 滚动加载
// import filters from '@/utils/filters';
import store from './store';
import router from './router/router';
import App from './App.vue';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/utils/directive';

Vue.config.productionTip = false;

// 插件
// Vue.use(ElementUI, { size: 'small', zIndex: 2000 });
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Image);
Vue.use(InfiniteLoading);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
