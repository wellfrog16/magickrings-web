<template>
    <div :class="[$style.main, 'main-box']">
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

    a {
        color: #fff;
    }
}
</style>
