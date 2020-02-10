<template>
    <b-container>
        <b-row>
            <b-col xl="6" md="12"><x-photos :photos="photos" /></b-col>
            <b-col xl="6" md="12"><x-info /></b-col>
            <b-col cols="12">col-sm</b-col>
            <b-col cols="12">col-sm</b-col>
            <b-col cols="12">col-sm</b-col>
        </b-row>
    </b-container>
</template>

<script>
import api from '@/api/usr/product';
import XPhotos from './components/photos.vue';
import XInfo from './components/info.vue';
// import XDescription from './components/description.vue';
// import XCorrelation from './components/correlation.vue';

export default {
    components: {
        XPhotos,
        XInfo,
    },
    data() {
        return {
            photos: [],
        };
    },
    mounted() {
        this.loadInfo();
    },
    methods: {
        async loadInfo() {
            const { id } = this.$route.params;
            const data = await api.detail(id);
            if (data) {
                this.photos = data.photos;
                console.log(data);
            }
        },
    },
};
</script>
