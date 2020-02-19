<template>
    <div :class="[$style.main, 'container']">
        <div class="row">
            <router-link
                :to="`/product/category/5?child=${item.id}`"
                :class="$style.item"
                class="col-xl-6 col-sm-12"
                v-for="item in data"
                :key="item.id"
            >
                <div class="rel-fullsize">
                    <img :src="`./src/assets/img/photo-${item.name}.jpg`">
                    <div class="abs-fullsize main-box">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
                    </div>
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
                {
                    id: 5,
                    name: 'astral-reading',
                    title: 'ASTRAL READING',
                    desc: '星光占卜',
                },
                {
                    id: 10,
                    name: 'holy-fire-reiki',
                    title: 'HOLY FIRE REIKI',
                    desc: '圣火灵气',
                },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    margin: 30px auto;
}

.item {
    font-size: 0;
    margin: 10px 0;

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
