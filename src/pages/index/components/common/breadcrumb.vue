<template>
    <div :class="[$style.main, 'main-wrapper']">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                v-for="item in $route.matched"
                :key="item.name"
            >
                <router-link :to="item.path || '/'">{{ item.name }}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

.main {
    margin-top: 60px !important;
    height: 90px;

    a {
        font-weight: normal;

        &:hover {
            color: @g-color-primary;
        }
    }

    :global(.el-breadcrumb__separator) {
        color: @g-color-primary;
    }
}
</style>
