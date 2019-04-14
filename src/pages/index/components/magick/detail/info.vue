<template>
    <div :class="[$style.main]">
        <span class="status-new"></span>
        <h2>产品名</h2>
        <p>什么内容<br>什么内容<br>什么内容<br>什么内容</p>
        <span :class="$style.price">￥100.00</span>
        <div :class="$style.button">
            <span class="more-button">立即购买</span>
        </div>
    </div>
</template>

<script>
export default {
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
