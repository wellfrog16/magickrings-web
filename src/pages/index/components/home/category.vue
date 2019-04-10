<template>
    <div :class="$style.main">
        <el-row :gutter="20">
            <el-col :span="12" v-for="item in data" :key="item.name" class="flex-center">
                <div :class="[$style.item, 'rel-fullsize']">
                    <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/category/${item.name}-photo.jpg`" :alt="item.name">
                    <div class="abs-fullsize main-box">
                        <!-- <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/category/${item.name}-text.png`"> -->
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
                    </div>
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
                { name: 'astral-reading', title: 'ASTRAL READING', desc: '星光占卜' },
                { name: 'holy-fire-reiki', title: 'HOLY FIRE REIKI', desc: '圣火灵气' },
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

    :global(.main-box) {
        transition: all 0.3s ease-in;

        h3 {
            font-size: 22px;
            letter-spacing: 1px;
            margin-top: -10px;
        }

        img {
            width: initial;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
}
</style>
