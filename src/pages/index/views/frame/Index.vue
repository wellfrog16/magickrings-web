<template>
    <div>
        <x-header />
        <router-view />
        <x-footer />
    </div>
</template>

<script>
import Header from '../../components/common/header.vue';
import Footer from '../../components/common/footer.vue';

export default {
    components: {
        XHeader: Header,
        XFooter: Footer,
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';
</style>
