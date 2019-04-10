<template>
    <div :class="[$style.main, 'main-box']">
        <!-- <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/kv/text.png`"> -->
        <h3>LIFE IS A SERIES OF MAGIC MONENTS!</h3>
        <p>
            始于英国，国内首家真实有效并具有艺术美学得魔法首饰和产品。
            <br>结合魔法、灵气、通灵、塔罗、占星、卡巴拉、炼金术等神秘学以及芳疗、花精疗愈等草药学，
            <br>结合当下时尚美学与流行元素。
        </p>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    @url: '../../../../../public/src/assets/img/usr/home/kv/bg.jpg';

    background-image: url(@url);
    background-size: image-width(@url) auto;
    background-position: center;
    max-width: image-width(@url);
    height: image-height(@url);
}
</style>
