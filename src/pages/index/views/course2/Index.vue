<template>
    <div :class="['main-wrapper', $style.main]">
        <el-row>
            <el-col :span="12"><img :src="`${$store.state.publicPath}/src/assets/img/usr/course/detail/photo1.jpg`"></el-col>
            <el-col :span="12" :class="$style.course1"><x-info /></el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :class="$style.course2"><x-info /></el-col>
            <el-col :span="12"><img :src="`${$store.state.publicPath}/src/assets/img/usr/course/detail/photo2.jpg`"></el-col>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="12">
                <div :class="$style.photo"><img :src="`${$store.state.publicPath}/src/assets/img/usr/course/detail/photo3.jpg`"></div>
                <x-info />
            </el-col>
            <el-col :span="12">
                <div :class="$style.photo"><img :src="`${$store.state.publicPath}/src/assets/img/usr/course/detail/photo4.jpg`"></div>
                <x-info />
            </el-col>
        </el-row>
        <x-contact />
        <x-search />
    </div>
</template>

<script>
import XInfo from '#index/components/course/info.vue';
import XSearch from '#index/components/course2/search.vue';
import XContact from '#index/components/common/contact.vue';

export default {
    components: {
        XInfo,
        XSearch,
        XContact,
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" module>
.main {
    margin-bottom: 120px;

    :global(.el-row) + :global(.el-row) {
        margin-top: 120px;
    }
}

.course1 {
    padding-left: 40px;
}

.course2 {
    padding-right: 40px;
}

.photo {
    margin-bottom: 40px;

    img {
        width: 100%;
    }
}
</style>
