<template>
    <b-container :class="[$style.main, 'py-5']">
        <h1>{{ title }}</h1>
        <div v-html="content" :class="$style.content"></div>
    </b-container>
</template>

<script>
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
