<template>
    <div :class="['main-wrapper', $style.main]">
        <div><img src="@/assets/img/usr/ritual/zhuanyun/main-1.jpg" alt=""></div>
        <div><img src="@/assets/img/usr/ritual/zhuanyun/main-2.jpg" alt=""></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            activeName: 'a',
        };
    },
};
</script>

<style lang="less" module>
.main {
    margin-bottom: 120px;
    text-align: center;
}
</style>
