<template>
    <div :class="[$style.main]">
        <el-tabs v-model="activeName" :class="[$style.tabs, $style[`item${data.contents.length}`]]">
            <el-tab-pane
                :key="item.tabIndex"
                :label="item.title"
                :name="item.tabIndex"
                v-for="item in data.contents"
            >
                <div v-html="item.content"></div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('product');

export default {
    data() {
        return {
            activeName: 'first',
        };
    },
    computed: {
        ...mapState(['data', 'updated']),
    },
    watch: {
        updated(val) {
            val && this.update();
        },
    },
    mounted() {
    },
    methods: {
        ...mapMutations(['setState']),

        update() {
            this.activeName = this.data.contents[0].tabIndex;
            this.setState({ updated: true });
        },
    },
};
</script>

<style lang="less" module>
.main {
    margin-top: 120px;
}

.item1 :global(.el-tabs__item) {
    width: 100%;
}

.item2 :global(.el-tabs__item) {
    width: 50%;
}

.item3 :global(.el-tabs__item) {
    width: 100% / 3;
}

.item4 :global(.el-tabs__item) {
    width: 25%;
}

.item5 :global(.el-tabs__item) {
    width: 20%;
}

.item6 :global(.el-tabs__item) {
    width: 100% / 6;
}

.tabs {
    :global(.el-tabs__nav) {
        width: 100%;
    }

    :global(.el-tabs__item) {
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 16px;
        color: #000;
    }

    :global(.el-tabs__active-bar) {
        background-color: #535353;
    }

    :global(.el-tab-pane) {
        padding: 20px;
        line-height: 1.8em;
        font-weight: 100;
        min-height: 250px;
    }
}
</style>
