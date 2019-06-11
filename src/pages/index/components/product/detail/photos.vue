<template>
    <div :class="[$style.main]">
        <div :class="[$style['swiper-container'], $style['gallery-top']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in data.photos" :key="index">
                    <img :src="`${imgServer}/${item}`" width="600" height="600">
                </div>
            </div>
        </div>
        <div :class="[$style['swiper-container'], $style['gallery-thumbs']]">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in data.photos" :key="index">
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

const { mapState, mapMutations } = createNamespacedHelpers('product');


export default {
    data() {
        return {
            imgServer: config.server.img,
            swiper1: null,
            swiper2: null,
        };
    },
    computed: {
        ...mapState(['data', 'updated']),
    },
    watch: {
        updated(val) {
            val && this.update();
        },
    },
    methods: {
        ...mapMutations(['setState']),

        init() {
            this.$nextTick(() => {
                this.swiper2 = new Swiper(`.${this.$style['gallery-thumbs']}`, {
                    spaceBetween: 25,
                    slidesPerView: 5,
                    // freeMode: true,
                    watchSlidesVisibility: true,
                    // watchSlidesProgress: true,
                });

                this.swiper1 = new Swiper(`.${this.$style['gallery-top']}`, {
                    spaceBetween: 10,
                    thumbs: {
                        swiper: this.swiper2,
                    },
                });
                this.setState({ updated: false });
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
