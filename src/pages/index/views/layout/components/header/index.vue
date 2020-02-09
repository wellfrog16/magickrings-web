<template>
    <navbar :class="$style.main" />
</template>

<script>
import Navbar from '../navbar/index.vue';

export default {
    components: {
        Navbar,
    },
};
</script>

<style lang="less" module>
.main {
    max-width: 1920px;
    margin: 0 auto;
    // height: 110px;
    padding: 1rem 1rem;
    background-color: #fff;
}
</style>
