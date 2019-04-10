<template>
    <div :class="[$style.main, 'main-box']">
        <!-- <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/magick-ceremony/text.png`"> -->
        <h3>MAGICK CEREMONY</h3>
        <p>独家 魔法蜡烛阵 魔法仪式 全球女巫都在做</p>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    @url: '../../../../../public/src/assets/img/usr/home/magick-ceremony/bg.jpg';

    background-image: url(@url);
    background-size: image-width(@url) auto;
    background-position: center;
    max-width: image-width(@url);
    height: image-height(@url);

    h3 {
        margin-top: -10px;
    }
}
</style>
