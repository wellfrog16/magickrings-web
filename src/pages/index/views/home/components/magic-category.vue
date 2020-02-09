<template>
    <div :class="[$style.main, 'container']">
        <div class="row">
            <router-link
                :class="$style.item"
                class="col-xl-3 col-md-6 col-sm-12"
                v-for="item in data"
                :key="item.id"
                :to="`/product/category/${item.id}`"
            >
                <div class="rel-fullsize">
                    <img :src="`/src/assets/img/${item.name}.jpg`">
                    <p class="abs-fullsize flex-center">{{ item.title }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { id: 1, name: 'magic-love', title: 'LOVE MAGICK' },
                { id: 2, name: 'magic-money', title: 'MONEY MAGICK' },
                { id: 3, name: 'magic-beauty', title: 'BEAUTY MAGICK' },
                { id: 4, name: 'magic-luck', title: 'LUCK MAGICK' },
            ],
        };
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    margin: 20px auto;
}

.item {
    font-size: 0;
    margin: 20px 0;

    img {
        width: 100%;
    }

    p {
        text-align: center;
        color: #fff;
        margin: 0;
        font-size: 18px;
        transition: all 0.3s ease-in;

        &:hover {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
}

@media only screen and (max-width: @g-min-width) {
    .item {
        margin: 10px 0;
    }
}
</style>
