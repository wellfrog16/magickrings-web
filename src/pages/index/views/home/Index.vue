<template>
    <div>
        <!-- KV -->
        <x-kv />

        <!-- 魔法课 -->
        <x-magic-category />

        <!-- 魔法礼仪 -->
        <x-magic-ceremony />

        <!-- 占卜两大分类 -->
        <x-zhanbu-category />

        <!-- 课程 -->
        <x-course />

        <!-- 资质证书 -->
        <x-certificate />

        <!-- 买家秀 -->
        <x-blog />
    </div>
</template>

<script>
import XKv from './components/kv.vue';
import XMagicCategory from './components/magic-category.vue';
import XMagicCeremony from './components/magic-ceremony.vue';
import XZhanbuCategory from './components/zhanbu-category.vue';
import XCourse from './components/course.vue';
import XCertificate from './components/certificate.vue';
import XBlog from './components/blog.vue';

export default {
    components: {
        XKv,
        XMagicCategory,
        XMagicCeremony,
        XZhanbuCategory,
        XCourse,
        XCertificate,
        XBlog,
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" module>
.main {
    height: 1500px;
    background-color: #f3f3f3;
}
</style>
