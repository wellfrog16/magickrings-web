<template>
    <div>
        <!-- KV -->
        <x-kv />

        <!-- 分类 -->
        <x-category />

        <!-- 三大主题 -->
        <x-theme />

        <!-- 课程 -->
        <x-course />

        <!-- 证书 -->
        <x-certificate />

        <!-- blog买家秀 -->
        <x-blog />
    </div>
</template>

<script>
import XKv from '#index/components/home/kv.vue';
import XCategory from '#index/components/home/category.vue';
import XTheme from '#index/components/home/theme.vue';
import XCourse from '#index/components/home/course.vue';
import XCertificate from '#index/components/home/certificate.vue';
import XBlog from '#index/components/home/blog.vue';

export default {
    components: {
        XKv,
        XCategory,
        XTheme,
        XCourse,
        XCertificate,
        XBlog,
    },
};
</script>
