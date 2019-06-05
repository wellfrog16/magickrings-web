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
import XPhotos from '#index/components/magick/detail/photos.vue';
import XInfo from '#index/components/magick/detail/info.vue';
import XDescription from '#index/components/magick/detail/description.vue';
import XCorrelation from '#index/components/magick/detail/correlation.vue';

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
};
</script>
