<template>
    <div :class="[$style.main, 'main-box', 'main-wrapper']">
        <h3>SPIRITUALISM &amp; PSYCHIC COURSES</h3>
        <p>全球认证资质，让你成为执证灵媒。</p>
        <router-link to="/course" :class="$style.button">课程介绍</router-link>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    @url: '/src/assets/img/course-bg.jpg';

    background-image: url(@url);
    height: 650px;
    background-repeat: no-repeat;
    background-color: #000;
    background-position: center;
    background-size: auto 100%;
}

.wrapper {
    text-align: center;
}

.button {
    width: 160px;
    height: 40px;
    border-radius: 3px;
    background-color: #fff;
    color: #535353;
    text-align: center;
    line-height: 40px;
    margin: 35px auto 0 auto;
    font-weight: bold;
    text-decoration: none !important;
    font-size: 1.2em;
}

@media only screen and (max-width: @g-min-width) {
    .main {
        height: 325px;
    }
}
</style>
