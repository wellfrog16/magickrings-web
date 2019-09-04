<template>
    <div>
        <!-- KV -->
        <x-kv />

        <!-- 魔法课 -->
        <x-magick />

        <!-- 魔法礼仪 -->
        <x-magick-ceremony />

        <!-- 两大分类 -->
        <x-category />

        <!-- 课程 -->
        <x-course />

        <!-- 证书 -->
        <x-certificate />

        <!-- blog买家秀 -->
        <x-blog />

        <!-- XNotification -->
        <x-notification :visible.sync="visible" />
    </div>
</template>

<script>
import XKv from '#index/components/home/kv.vue';
import XMagick from '#index/components/home/magick.vue';
import XMagickCeremony from '#index/components/home/magickCeremony.vue';
import XCategory from '#index/components/home/category.vue';
import XCourse from '#index/components/home/course.vue';
import XCertificate from '#index/components/home/certificate.vue';
import XBlog from '#index/components/home/blog.vue';
import XNotification from '#index/components/home/notification.vue';

export default {
    components: {
        XKv,
        XMagick,
        XMagickCeremony,
        XCategory,
        XCourse,
        XCertificate,
        XBlog,
        XNotification,
    },
    data() {
        return {
            visible: false,
        };
    },
    mounted() {
        this.visible = true;
    },
};
</script>
