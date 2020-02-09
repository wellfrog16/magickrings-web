<template>
    <b-container :class="$style.main">
        <div v-html="content"></div>
    </b-container>
</template>

<script>
import api from '@/api/usr/story';

export default {
    data() {
        return {
            title: '',
            content: '',
        };
    },
    mounted() {
        this.loadInfo();
    },
    methods: {
        loadInfo() {
            api.detail().then((res) => {
                // console.log(res);
                this.title = res.title;
                this.content = res.content;
            });
        },
    },
};
</script>

<style lang="less" module>
.main {
    img {
        width: 100% !important;
    }
}
</style>
