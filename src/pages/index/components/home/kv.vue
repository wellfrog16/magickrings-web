<template>
    <div :class="[$style.main, 'flex-center']">
        <img src="@/assets/img/usr/home/kv/text.png">
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    @url: '../../../../assets/img/usr/home/kv/bg.jpg';

    background-image: url('../../../../assets/img/usr/home/kv/bg.jpg');
    background-size: image-width(@url) auto;
    background-position: center;
    max-width: image-width(@url);
    height: image-height(@url);
}
</style>
