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
    max-width: 1440px;
    margin: 0 auto;
}
</style>
