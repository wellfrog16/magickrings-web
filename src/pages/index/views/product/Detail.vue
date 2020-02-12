<template>
    <b-container>
        <b-row>
            <b-col xl="6" md="12"><x-photos :photos="photos" /></b-col>
            <b-col xl="6" md="12"><x-info :info="info" /></b-col>
            <b-col cols="12"><x-description :content="content" /></b-col>
            <b-col cols="12"><x-correlation :list="list" /></b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api/usr/product';
import XPhotos from './components/photos.vue';
import XInfo from './components/info.vue';
import XDescription from './components/description.vue';
import XCorrelation from './components/correlation.vue';
import product from '#index/helper/product';

export default {
    components: {
        XPhotos,
        XInfo,
        XDescription,
        XCorrelation,
    },
    data() {
        return {
            photos: [],
            info: {
                status: '',
                name: '',
                price: 0,
                url: '#',
                message: '',
            },
            content: [],
            list: [],
        };
    },
    mounted() {
        this.loadInfo();
    },
    methods: {
        ...mapMutations(['setState']),

        setBreadcrumb(id, categoryName) {
            const title = product.category[id].name;

            // 设置面包屑
            const breadcrumb = [
                { meta: { title }, path: '' },
                { meta: { title: categoryName }, path: '' },
            ];
            this.$nextTick(() => this.setState({ routesMatched: breadcrumb }));
        },

        async loadInfo() {
            const { id } = this.$route.params;
            const data = await api.detail(id);
            if (data) {
                this.photos = data.photos;
                this.info = {
                    status: data.status,
                    name: data.name,
                    price: data.price,
                    url: data.url,
                    message: data.message,
                };
                this.content = data.contents;

                this.setBreadcrumb(data.category, data.categoryName);
            }

            this.loadList(data.relate);
        },

        async loadList(ids) {
            const res = await api.list({ ids, p: 1, ps: 4 });
            if (res && res.list.length > 0) {
                this.list = [...res.list];
            }
        },
    },
};
</script>
