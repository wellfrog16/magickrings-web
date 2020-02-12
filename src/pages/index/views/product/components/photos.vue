<template>
    <div :class="[$style.main]">
        <div :class="[$style['swiper-container'], $style['gallery-top']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in photos" :key="index">
                    <img :src="`${imgServer}/${item}`" />
                </div>
            </div>
        </div>
        <div :class="[$style['swiper-container'], $style['gallery-thumbs'], 'd-none', 'd-xl-block']">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in photos" :key="index">
                    <img :src="`${imgServer}/${item}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper } from '@/utils/cdn';
import config from '@/config';

export default {
    props: {
        photos: {
            type: Array,
        },
    },
    data() {
        return {
            slide: 0,
            imgServer: config.server.img,
            swiper1: null,
            swiper2: null,
        };
    },
    mounted() {
        setTimeout(() => {
            this.update();
        }, 100);
    },
    methods: {
        init() {
            this.$nextTick(() => {
                this.swiper2 = new Swiper(`.${this.$style['gallery-thumbs']}`, {
                    spaceBetween: 18,
                    slidesPerView: 5,
                    // freeMode: true,
                    // watchSlidesVisibility: true,
                    // watchSlidesProgress: true,
                });

                // 有error不影响显示，待修复
                this.swiper1 = new Swiper(`.${this.$style['gallery-top']}`, {
                    spaceBetween: 10,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    thumbs: {
                        swiper: this.swiper2,
                    },
                });
            });
        },

        update() {
            if (this.swiper1) {
                this.swiper1.destroy();
                this.swiper2.destroy();
                this.init();
            } else {
                this.init();
            }
        },
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

    img {
        object-fit: cover;
        width: 100%;
    }
}

.gallery-top {
    // height: 600px;
    width: 100%;
}

.gallery-thumbs {
    margin-top: 15px;
    width: 100%;
    // height: 100px;

    img {
        width: 95px;
    }
}
</style>
