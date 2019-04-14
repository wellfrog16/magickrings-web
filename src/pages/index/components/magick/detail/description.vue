<template>
    <div :class="[$style.main]">
        <el-tabs v-model="activeName" :class="$style.tabs">
            <el-tab-pane label="功效" name="first">
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                内容内容内容内容内容内容内容内容内容
            </el-tab-pane>
            <el-tab-pane label="选材" name="second">内容内容内容内容内容内容内容内容内容</el-tab-pane>
            <el-tab-pane label="注意事项" name="third">内容内容内容内容内容内容内容内容内容内容内容内容</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
        };
    },
};
</script>

<style lang="less" module>
.main {
    margin-top: 120px;

    .tabs {
        :global(.el-tabs__nav) {
            width: 100%;
        }

        :global(.el-tabs__item) {
            width: 33.33333%;
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
}
</style>
