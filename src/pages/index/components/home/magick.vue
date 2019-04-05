<template>
    <div :class="$style.main">
        <el-row :gutter="10">
            <el-col :span="6" v-for="item in data" :key="item.name" class="flex-center">
                <div :class="[$style.item, 'rel-fullsize']">
                    <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/magick/${item.name}.jpg`" :alt="item.name">
                    <p class="abs-fullsize flex-center">{{ item.title }}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { name: 'love-magick', title: 'LOVE MAGICK' },
                { name: 'money-magick', title: 'MONEY MAGICK' },
                { name: 'beauty-magick', title: 'BEAUTY MAGICK' },
                { name: 'luck-magick', title: 'LUCK MAGICK' },
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
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
}
</style>
