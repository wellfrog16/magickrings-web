<template>
    <div :class="['main-wrapper', $style.main]" v-html="content">
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api/usr/story';

export default {
    data() {
        return {
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
                name: '品牌故事',
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
}
</style>
