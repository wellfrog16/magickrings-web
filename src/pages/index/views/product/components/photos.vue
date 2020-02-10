<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
        >
            <b-carousel-slide
                v-for="photo in photos"
                :key="photo"
                :img-src="`${imgServer}/${photo}`"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
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
        };
    },
};
</script>

<style lang="less" module>
</style>
