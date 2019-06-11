<template>
    <div :class="['main-wrapper']">
        <h2 :class="$style.title">敬请期待</h2>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
        };
    },
    mounted() {
        this.setBreadcrumb();
    },
    methods: {
        ...mapMutations(['setState']),

        // 设置面包屑导航
        setBreadcrumb() {
            const { fullPath } = this.$route;

            const breadcrumb = [
                { name: '课程', path: fullPath },
                { name: '课程介绍', path: fullPath },
            ];

            this.setState({ breadcrumb });
        },
    },
};
</script>

<style lang="less" module>
.title {
    text-align: center;
    margin: 100px auto 200px auto;
}
</style>
