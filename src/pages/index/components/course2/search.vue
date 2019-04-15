<template>
    <div :class="[$style.main, 'flex-row-center']">
        <el-form inline :class="[$style.form, 'flex-row-center']">
            <h5>Course Search</h5>
            <el-form-item>
                <el-select v-model="value" placeholder="选择课程" size="small" style="width: 128px;">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="value1" type="date" placeholder="开始时间" size="small" style="width: 128px;" />
            </el-form-item>
            <el-form-item>
                <el-date-picker v-model="value2" type="date" placeholder="结束时间" size="small" style="width: 128px;" />
            </el-form-item>
            <el-form-item>
                <el-input placeholder="剩余名额" size="small" style="width: 128px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :class="$style.button" size="small">Search</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                { value: '选项1', label: '黄金糕' },
                { value: '选项2', label: '双皮奶' },
                { value: '选项3', label: '蚵仔煎' },
                { value: '选项4', label: '龙须面' },
                { value: '选项5', label: '北京烤鸭' },
            ],
            value: '',
            value1: '',
            value2: '',
        };
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

.main {
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 50%;
    margin-left: -400px;
    width: 800px;
    height: 50px;
    background-color: @g-color-primary;
}

.form {
    h5 {
        display: inline-block;
        color: #fff;
        margin: 0 20px;
        font-size: 16px;
        font-weight: bold;
    }

    :global(.el-form-item) {
        margin-bottom: 0;
    }
}

.button {
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    font-weight: bold;

    &:hover {
        background-color: #000;
        color: #fff;
        border: 0;
    }
}
</style>
