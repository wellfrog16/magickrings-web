<template>
    <div :class="$style.main">
        <el-row :gutter="10">
            <el-col :span="6" v-for="item in data" :key="item.id" class="flex-center">
                <router-link :to="`/product/category/${item.id}`">
                    <div :class="[$style.item, 'rel-fullsize']">
                        <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/magick/${item.name}.jpg`" :alt="item.name">
                        <p class="abs-fullsize flex-center">{{ item.title }}</p>
                    </div>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { id: 1, name: 'love-magick', title: 'LOVE MAGICK' },
                { id: 2, name: 'money-magick', title: 'MONEY MAGICK' },
                { id: 3, name: 'beauty-magick', title: 'BEAUTY MAGICK' },
                { id: 4, name: 'luck-magick', title: 'LUCK MAGICK' },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    max-width: 1200px;
    margin: 80px auto;
}

.item {
    font-size: 0;

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
</style>
