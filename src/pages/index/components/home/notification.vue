<template>
    <div :class="$style.main" v-show="visible">
        <div :class="$style.wrapper">
            <div :class="$style.content">
                <h3>{{ title }}</h3>
                <p v-html="content"></p>
            </div>
            <div :class="$style.photo">
                <el-image :src="`${imgServer}/${photo}`" style="width: 400px; height: 480px;" fit="cover" />
            </div>
            <div :class="$style.close" @click="handleClose">×</div>
        </div>
    </div>
</template>

<script>
import api from '@/api/usr/notification';
import config from '@/config';

export default {
    props: {
        visible: { type: Boolean, default: true },
    },
    data() {
        return {
            title: '',
            content: '',
            photo: '',
            imgServer: config.server.img,
        };
    },
    mounted() {
        this.loadInfo();
    },
    methods: {
        async loadInfo() {
            const res = await api.detail();
            if (res) {
                this.title = res.title;
                this.content = res.content;
                this.photo = res.photo;
            }
        },

        handleClose() {
            this.$emit('update:visible', false);
        },
    },
};
</script>

<style lang="less" module>
.main {
    position: fixed;
    width: 1060px;
    height: 480px;
    z-index: 1000;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
}

.wrapper {
    position: relative;
    display: flex;
    height: 100%;

    .content {
        flex-grow: 1;
        box-sizing: border-box;
        padding: 48px;
        overflow: auto;
    }

    .photo {
        flex: 0 0 400px;
        background-color: #ccc;
    }

    .close {
        position: absolute;
        width: 35px;
        height: 35px;
        background-color: #a57f50;
        top: -10px;
        right: -10px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        color: #fff;
        font-size: 30px;
    }
}
</style>
