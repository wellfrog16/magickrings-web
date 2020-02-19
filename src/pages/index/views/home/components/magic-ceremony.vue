<template>
    <div :class="[$style.main, 'main-box', 'main-wrapper']">
        <router-link to="/product/category/5">
            <h3>MAGICK CEREMONY</h3>
            <p>独家 魔法蜡烛阵 魔法仪式 全球女巫都在做</p>
        </router-link>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    // @url: '/src/assets/img/ceremony-bg.jpg';
    @url: '../../../../../../public/src/assets/img/ceremony-bg.jpg';

    background-image: url(@url);
    height: 650px;
    background-repeat: no-repeat;
    background-color: #000;
    background-position: center;
    background-size: auto 100%;

    h3 {
        margin-top: -10px;
    }

    a {
        color: #fff;
    }
}

@media only screen and (max-width: @g-min-width) {
    .main {
        height: 325px;
    }
}
</style>
