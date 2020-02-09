<template>
    <b-container>
        <b-breadcrumb :items="routers" :class="$style.main"></b-breadcrumb>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(['routesMatched', 'extraRoutes']),

        routers() {
            const baseRouters = [{ text: '首页', to: { path: '/' } }];
            let routers = this.routesMatched
                .filter((item) => !(item.meta && item.meta.hidden) && (item.meta && item.meta.title !== '首页'))
                .map((item) => ({ text: item.meta.title, to: { path: item.path } }));
            routers = [...baseRouters, ...routers];
            routers[routers.length - 1].active = true;
            return routers;
        },
    },
    // watch: {
    //     routesMatched(val) {
    //         console.log(val);
    //         console.log(this.routers);
    //     },
    // },
    mounted() {
        // setInterval(() => {
        //     console.log(this.routesMatched);
        // }, 3000);
    },
};
</script>

<style lang="less" module>
.main {
    background-color: #fff;
}
</style>
