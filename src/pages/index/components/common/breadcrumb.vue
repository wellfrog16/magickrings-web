<template>
    <div :class="[$style.main, 'main-wrapper']">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                v-for="item in list"
                :key="item.name"
            >
                <router-link :to="item.path">{{ item.name }}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['breadcrumb']),

        list() {
            const home = { name: '首页', path: '/' };
            return [home, ...this.breadcrumb];
        },
    },
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
