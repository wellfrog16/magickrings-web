<template>
    <div :class="$style.main">
        <x-header />
        <x-breadcrumb v-show="breadcrumbVisible" />
        <router-view />
        <x-footer />
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import XHeader from './components/header/index.vue';
import XFooter from './components/footer/index.vue';
import XBreadcrumb from './components/breadcrumb/index.vue';

export default {
    components: { XHeader, XFooter, XBreadcrumb },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.setState({ routesMatched: [...to.matched] });
            vm.breadcrumbVisible = to.path !== '/home/index';
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.setState({ routesMatched: [...to.matched] });
        this.breadcrumbVisible = to.path !== '/home/index';
        next();
    },
    data() {
        return {
            breadcrumbVisible: false,
        };
    },
    methods: {
        ...mapMutations(['setState']),
    },
};
</script>

<style lang="less" module>
.main {
    padding-top: 6rem;
}
</style>
