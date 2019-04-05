<template>
    <div :class="[$style.main, 'flex-center']">
        <div :class="$style.wrapper">
            <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/course/text.png`">
            <div :class="$style.button">课程介绍</div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    @url: '../../../../../public/src/assets/img/usr/home/course/bg.jpg';

    background-image: url(@url);
    background-size: image-width(@url) auto;
    background-position: center;
    max-width: image-width(@url);
    height: image-height(@url);
}

.wrapper {
    text-align: center;
}

.button {
    width: 160px;
    height: 40px;
    border-radius: 3px;
    background-color: #fff;
    color: #535353;
    text-align: center;
    line-height: 40px;
    margin: 35px auto 0 auto;
    font-weight: bold;
}
</style>
