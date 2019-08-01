<template>
    <div :class="['main-wrapper', $style.main]">
        <h1>{{ title }}</h1>
        <div :class="$style.content" v-html="content"></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api/usr/clause';

export default {
    data() {
        return {
            title: '',
            content: '',
        };
    },
    mounted() {
        this.loadInfo();
        this.setBreadcrumb();
    },
    methods: {
        ...mapMutations(['setState']),

        async loadInfo() {
            const res = await api.detail();
            if (res) {
                this.title = res.title;
                this.content = res.content;
            }
        },

        // 设置面包屑导航
        setBreadcrumb() {
            const { fullPath } = this.$route;

            const breadcrumb = [{
                name: '隐私条款',
                path: fullPath,
            }];

            this.setState({ breadcrumb });
        },
    },
};
</script>

<style lang="less" module>
.main {
    padding-bottom: 120px;

    h1 {
        text-align: center;
        font-size: 16px;
        margin: 45px 0 55px 0;
    }
}

.content {
    line-height: 1.5em;
    font-size: 16px;
    letter-spacing: 2px;
}
</style>
