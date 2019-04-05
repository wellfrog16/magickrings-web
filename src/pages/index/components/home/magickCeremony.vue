<template>
    <div :class="[$style.main, 'flex-center']">
        <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/magick-ceremony/text.png`">
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
}
</style>
