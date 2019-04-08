<template>
    <div :class="$style.main">
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in data" :key="item.name" class="flex-center">
                <div :class="[$style.item, 'rel-fullsize']">
                    <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/category/${item.name}-photo.jpg`" :alt="item.name">
                    <p class="abs-fullsize flex-center">
                        <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/category/${item.name}-text.png`">
                    </p>
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
                { name: 'astral-reading' },
                { name: 'holy-fire-reiki' },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    max-width: 1200px;
    margin: 30px auto;
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

        img {
            width: initial;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
}
</style>
