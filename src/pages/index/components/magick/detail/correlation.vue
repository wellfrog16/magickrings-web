<template>
    <div :class="[$style.main]">
        <h2>必备搭配</h2>
        <el-row :gutter="28">
            <el-col :span="6" v-for="item in list" :key="item.id" :class="$style.item">
                <div :class="$style.photo">
                    <img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/${item.photo}`">
                    <p class="abs-fullsize flex-center"><span>浏览详细</span></p>
                </div>
                <h5>{{ item.name }}</h5>
                <span :class="$style.price">{{ item.price | currency('￥', 2) }}</span>
                <div><span :class="$style.button">即刻购买</span></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1, name: '产品名称', photo: 'photo1.jpg', price: '100', status: 'new',
                },
                {
                    id: 2, name: '产品名称', photo: 'photo2.jpg', price: '100', status: 'hot',
                },
                {
                    id: 3, name: '产品名称', photo: 'photo3.jpg', price: '100', status: 'sale',
                },
                {
                    id: 4, name: '产品名称', photo: 'photo4.jpg', price: '100', status: 'new',
                },
            ],
        };
    },
};
</script>

<style lang="less" module>
@import '../../../../../assets/style/config.less';

.main {
    margin-bottom: 80px;

    h2 {
        margin: 0;
        line-height: 50px;
        border-bottom: 1px solid @g-color-primary;
        margin-bottom: 25px;
        text-align: center;
        font-size: 16px;
        letter-spacing: 3px;
    }
}

.item {
    text-align: center;
    height: 520px;

    .price {
        color: #a57f50;
    }

    .photo {
        position: relative;
        font-size: 0;
        width: 100%;

        img {
            width: 100%;
        }

        p span {
            color: #fff;
            font-size: 18px;
            padding-bottom: 4px;
            display: inline-block;
            border-bottom: 1px solid #fff;
        }

        p {
            opacity: 0;
            margin: 0;
            transition: all 0.3s ease-in;

            &:hover {
                opacity: 1;
                background-color: rgba(0, 0, 0, 0.6);
            }
        }
    }

    h5 {
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 14px;
    }

    .button {
        border: 1px solid #000;
        border-radius: 4px;
        text-align: center;
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin-top: 30px;
        font-size: 14px;
    }
}
</style>
