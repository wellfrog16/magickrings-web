<template>
    <div :class="$style.main">
        <h3>BLOG 买家秀</h3>
        <el-row :gutter="30">
            <el-col :span="8" v-for="item in data" :key="item.id">
                <div>
                    <img :src="`${$store.state.publicPath}/src/assets/img/usr/home/blog/${item.pic}.jpg`">
                </div>
                <div :class="$style.content">
                    <span>@{{ item.user }}</span>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description + item.description }}</p>
                </div>
                <div :class="$style.button"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1, user: '买家1', title: '商品标题名称', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述', pic: 'pic1',
                },
                {
                    id: 2, user: '买家2', title: '商品标题稀里哗啦', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述', pic: 'pic2',
                },
                {
                    id: 3, user: '买家3', title: '商品标题嘁哩喀喳', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述', pic: 'pic3',
                },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    max-width: 1200px;
    margin: 80px auto 30px auto;

    h3 {
        line-height: 40px;
        text-align: center;
        margin-bottom: 30px;
        letter-spacing: 2px;
        font-weight: normal;
    }
}

.content {
    margin-top: 20px;

    span {
        font-size: 16px;
        display: block;
    }

    h5 {
        font-size: 16px;
        color: #a3a3a3;
        font-weight: 100;
        margin: 10px auto 20px auto;
    }

    p {
        color: #a3a3a3;
        letter-spacing: 2px;
    }
}
</style>
