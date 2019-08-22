<template>
    <div :class="['main-wrapper', $style.main]">
        <div><img src="@/assets/img/usr/course/tongling/main-1.jpg" alt=""></div>
        <el-tabs v-model="activeName" :class="$style.tabs">
            <el-tab-pane label="灵媒能够做什么" name="a"><img src="@/assets/img/usr/course/tongling/text-1.jpg" alt=""></el-tab-pane>
            <el-tab-pane label="必须掌握的技能" name="b"><img src="@/assets/img/usr/course/tongling/text-2.jpg" alt=""></el-tab-pane>
        </el-tabs>
        <div><img src="@/assets/img/usr/course/tongling/main-2.jpg" alt=""></div>
        <div :class="$style.video">
            <iframe height=450 width=900 src="http://player.youku.com/embed/XNDMxMjQzMzc3Ng==" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="flex-center">往期课程回顾</div>
        <div><img src="@/assets/img/usr/course/tongling/main-3.jpg" alt=""></div>
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
        width: 50%;
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
