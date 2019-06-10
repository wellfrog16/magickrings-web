<template>
    <div :class="[$style.main]">
        <span :class="`status-${data.status}`"></span>
        <h2>{{ data.name }}</h2>
        <p v-html="remark"></p>
        <span :class="$style.price">￥{{ data.price }}</span>
        <div :class="$style.button">
            <a class="more-button" :href="data.url" target="_blank">立即购买</a>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('product');

export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(['data']),

        remark() {
            return this.data.message.replace(/\n/g, '<br>');
        },
    },
};
</script>

<style lang="less" module>
@import '../../../../../assets/style/config.less';

.main {
    box-sizing: border-box;
    padding-left: 40px;

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
    }
}

.price {
    line-height: 1em;
}

.button {
    margin-top: 38px;
}
</style>
