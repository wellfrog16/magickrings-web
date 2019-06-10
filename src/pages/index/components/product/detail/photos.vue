<template>
    <div :class="[$style.main]">
        <div :class="[$style['swiper-container'], $style['gallery-top']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in data.photos" :key="item">
                    <img :src="`${imgServer}/${item}`" width="600" height="600">
                </div>
            </div>
        </div>
        <div :class="[$style['swiper-container'], $style['gallery-thumbs']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in data.photos" :key="item">
                    <img :src="`${imgServer}/${item}`" width="100" height="100">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper } from '@/utils/cdn';
import { createNamespacedHelpers } from 'vuex';
import config from '@/config';

const { mapState } = createNamespacedHelpers('product');


export default {
    data() {
        return {
            imgServer: config.server.img,
        };
    },
    computed: {
        ...mapState(['data']),
    },
    mounted() {
        const galleryThumbs = new Swiper(`.${this.$style['gallery-thumbs']}`, {
            spaceBetween: 25,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        const test = new Swiper(`.${this.$style['gallery-top']}`, { // eslint-disable-line
            // spaceBetween: 10,
            thumbs: {
                swiper: galleryThumbs,
            },
        });
        // console.log(test);
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
