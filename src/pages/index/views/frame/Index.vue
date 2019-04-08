<template>
    <div>
        <x-header />
        <x-breadcrumb v-show="$route.name !== '原型首页'" />
        <router-view />
        <x-footer />
    </div>
</template>

<script>
import XHeader from '../../components/common/header.vue';
import XFooter from '../../components/common/footer.vue';
import XBreadcrumb from '../../components/common/breadcrumb.vue';

export default {
    components: {
        XHeader,
        XFooter,
        XBreadcrumb,
    },
    mounted() {
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';
</style>
