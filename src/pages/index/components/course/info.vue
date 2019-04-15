<template>
    <div :class="[$style.main]">
        <span class="status-new"></span>
        <h2>产品名</h2>
        <span :class="$style.price">￥100.00</span>
        <p>什么内容<br>什么内容<br>什么内容<br>什么内容</p>
        <div :class="$style.button">
            <span class="more-button">查看详细</span>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

.main {
    box-sizing: border-box;

    h2 {
        border-bottom: 1px solid @g-color-primary;
        color: @g-color-primary;
        margin: 0 0 40px 0;
        height: 87px;
        line-height: 87px;
        font-weight: normal;
        font-size: 24px;
    }

    p {
        font-size: 16px;
        line-height: 1.8em;
    }
}

.price {
    line-height: 1em;
    margin-bottom: 35px;
}

.button {
    margin-top: 38px;
}
</style>
