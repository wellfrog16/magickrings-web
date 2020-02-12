<template>
    <div :class="[$style.main]">
        <b-tabs>
            <b-tab
                :key="item.tabIndex"
                :title="item.title"
                :name="item.tabIndex"
                v-for="item in content"
            >
                <div v-html="item.content" class="py-3"></div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
        },
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" module>
.main {
    margin-top: 120px;

    :global(.tab-pane) {
        line-height: 1.8em;
        font-weight: 100;
        min-height: 250px;
        font-size: 16px;
    }
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
