<template>
    <div :class="[$style.main]">
        <div :class="[$style['swiper-container'], $style['gallery-top']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/photo1.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/photo1.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/photo1.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/photo1.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/photo1.jpg`"></div>
            </div>
        </div>
        <div :class="[$style['swiper-container'], $style['gallery-thumbs']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/s1.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/s2.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/s3.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/s4.jpg`"></div>
                <div class="swiper-slide"><img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/detail/s5.jpg`"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper } from '@/utils/cdn';

export default {
    mounted() {
        const galleryThumbs = new Swiper(`.${this.$style['gallery-thumbs']}`, {
            spaceBetween: 25,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        const test = new Swiper(`.${this.$style['gallery-top']}`, {
            // spaceBetween: 10,
            thumbs: {
                swiper: galleryThumbs,
            },
        });
        console.log(test);
    },
};
</script>

<style lang="less" module>
.main {
    overflow: hidden;
}

.swiper-container {
    :global(.swiper-slide) {
        background-size: cover;
        background-position: center;
    }
}

.gallery-top {
    height: 600px;
    width: 600px;
}

.gallery-thumbs {
    margin-top: 20px;
    width: 600px;
    height: 100px;
}
</style>
