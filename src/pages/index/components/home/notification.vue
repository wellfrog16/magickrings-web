<template>
    <div :class="$style.main" v-if="visible">
        <div :class="$style.wrapper">
            <div :class="$style.photo">
                <a :href="linkUrl" target="_blank" v-if="linkUrl">
                    <el-image :src="photoUrl" style="width: 750px; height: 450px;" fit="cover" />
                </a>
                <el-image v-else :src="photoUrl" style="width: 750px; height: 450px;" fit="cover" />
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
            imgServer: config.server.img,
            photoUrl: '',
            linkUrl: '',
        };
    },
    mounted() {
        this.loadInfo();
    },
    methods: {
        async loadInfo() {
            const res = await api.detail();
            if (res) {
                this.linkUrl = res.url;
                this.photoUrl = `${this.imgServer}/${res.photo}`;
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
    width: 750px;
    height: 450px;
    z-index: 1000;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
}

.wrapper {
    position: relative;
    height: 100%;

    .photo {
        height: 100%;
        width: 100%;
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
