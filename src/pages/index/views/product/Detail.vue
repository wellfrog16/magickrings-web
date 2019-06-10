<template>
    <div :class="['main-wrapper']">
        <el-row>
            <el-col :span="12"><x-photos /></el-col>
            <el-col :span="12"><x-info /></el-col>
        </el-row>
        <x-description />
        <x-correlation />
    </div>
</template>

<script>
import XPhotos from '#index/components/product/detail/photos.vue';
import XInfo from '#index/components/product/detail/info.vue';
import XDescription from '#index/components/product/detail/description.vue';
import XCorrelation from '#index/components/product/detail/correlation.vue';
import { createNamespacedHelpers } from 'vuex';
import api from '@/api/usr/product';

const { mapMutations } = createNamespacedHelpers('product');

export default {
    components: {
        XPhotos,
        XInfo,
        XDescription,
        XCorrelation,
    },
    data() {
        return {
        };
    },
    mounted() {
        this.loadInfo();
    },
    methods: {
        ...mapMutations(['setState']),

        async loadInfo() {
            const { id } = this.$route.params;
            const data = await api.detail(id);
            if (data) {
                this.setState({ data, updated: true });
            }
        },
    },
};
</script>
