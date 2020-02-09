<template>
    <div :class="[$style.main, 'content-wrapper']">
        <div><img src="/src/assets/img/course/lingqi/main-1.jpg" /></div>
        <b-tabs content-class="mt-3" fill>
            <b-tab title="灵气的作用" active><img src="/src/assets/img/course/lingqi/text-2.jpg"></b-tab>
            <b-tab title="灵气的使用"><img src="/src/assets/img/course/lingqi/text-1.jpg"></b-tab>
            <b-tab title="如何成为合格灵气师"><img src="/src/assets/img/course/lingqi/text-3.jpg"></b-tab>
        </b-tabs>
        <div><img src="/src/assets/img/course/lingqi/main-2.jpg"></div>
        <div :class="$style.video">
            <iframe src="http://player.youku.com/embed/XNDMxMjQzMzc3Ng==" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="flex-center my-3">往期课程回顾</div>
        <div class="mb-3"><img src="/src/assets/img/course/lingqi/main-3.jpg"></div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    img {
        width: 100%;
    }
}

.video {
    text-align: center;
    margin-bottom: 40px;

    iframe {
        height: 450px;
        width: 900px;
    }
}

@media only screen and (max-width: @g-min-width) {
    .video iframe {
        width: 100%;
        height: 250px;
    }
}
</style>
