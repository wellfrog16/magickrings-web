<template>
    <div :class="['main-wrapper', $style.main]">
        <div><img src="@/assets/img/usr/course/lingqi/main-1.jpg" alt=""></div>
        <el-tabs v-model="activeName" :class="$style.tabs">
            <el-tab-pane label="灵气的作用" name="a"><img src="@/assets/img/usr/course/lingqi/text-2.jpg" alt=""></el-tab-pane>
            <el-tab-pane label="灵气的使用" name="b"><img src="@/assets/img/usr/course/lingqi/text-1.jpg" alt=""></el-tab-pane>
            <el-tab-pane label="如何成为合格灵气师" name="c"><img src="@/assets/img/usr/course/lingqi/text-3.jpg" alt=""></el-tab-pane>
        </el-tabs>
        <div><img src="@/assets/img/usr/course/lingqi/main-2.jpg" alt=""></div>
        <div :class="$style.video">
            <iframe height=450 width=900 src="http://player.youku.com/embed/XNDMxMjQzMzc3Ng==" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="flex-center">往期课程回顾<br><br></div>
        <div><img src="@/assets/img/usr/course/lingqi/main-3.jpg" alt=""></div>
        <x-contact />
    </div>
</template>

<script>
import XContact from '#index/components/common/contact.vue';

export default {
    components: {
        XContact,
    },
    data() {
        return {
            activeName: 'a',
        };
    },
};
</script>

<style lang="less" module>
.tabs {
    :global(.el-tabs__nav) {
        width: 100%;
    }

    :global(.el-tabs__item) {
        width: 33.3333%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 16px;
        color: #000;
    }

    :global(.el-tabs__active-bar) {
        background-color: #535353;
    }
}

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

.video {
    text-align: center;
    margin-bottom: 40px;
}
</style>
