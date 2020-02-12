<template>
    <div :class="[$style.main, 'pl-sm-3', 'mt-4', 'mt-xl-0']">
        <span :class="`status-${info.status}`"></span>
        <h2>{{ info.name }}</h2>
        <p class="py-3" v-html="remark"></p>
        <span :class="$style.price">{{ info.price | currency('￥', 2) }}</span>
        <div :class="$style.button">
            <a class="more-button" :href="info.url" target="_blank">立即购买</a>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        info: {
            type: Object,
            default: () => ({
                status: '',
                name: '',
                price: 0,
                url: '#',
                message: '',
            }),
        },
    },
    data() {
        return {
        };
    },
    computed: {
        remark() {
            return this.info.message.replace(/\n/g, '<br>');
        },
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    box-sizing: border-box;

    h2 {
        border-bottom: 1px solid @g-color-primary;
        margin: 0;
        height: 87px;
        line-height: 87px;
        font-weight: normal;
        font-size: 24px;
    }

    p {
        font-size: 16px;
        line-height: 2em;
    }
}

.price {
    line-height: 1em;
    font-size: 16px;
}

.button {
    margin-top: 38px;
}
</style>
